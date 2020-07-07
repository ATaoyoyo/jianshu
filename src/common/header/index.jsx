import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreator } from './store'
import { Link } from 'react-router-dom'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addtion,
  Button,
  SearchWrapper,
  SearchContainer,
  SearchTitle,
  SearchSwitch,
  SearchItem,
} from './style'

class Header extends Component {
  showSearchItem() {
    const {
      fouce,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        const val = newList[i]
        pageList.push(<SearchItem key={val}>{val}</SearchItem>)
      }
    }
    if (fouce || mouseIn) {
      return (
        <SearchContainer
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchTitle>
            热门搜索
            <SearchSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <span className="iconfont iconchange"></span>
              换一批
            </SearchSwitch>
          </SearchTitle>
          {pageList}
        </SearchContainer>
      )
    }
    return null
  }

  render() {
    const {
      fouce,
      handleInputBlur,
      handleInputFocuce,
      list,
      login,
    } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {login ? (
            <NavItem className="right">欢迎你, ATaoyoyo</NavItem>
          ) : (
            <Link to="/login"> 
              <NavItem className="right">登录</NavItem>
            </Link>
          )}

          <NavItem className="right">Aa</NavItem>
          <SearchWrapper>
            <CSSTransition in={fouce} timeout={200} classNames="slide">
              <NavSearch
                className={fouce ? 'fouced' : ''}
                onFocus={() => handleInputFocuce(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <span
              className={
                !fouce
                  ? 'iconfont iconfangdajing zoom'
                  : 'iconfont iconfangdajing zoom fouced'
              }
            ></span>
            {this.showSearchItem()}
          </SearchWrapper>
          <Addtion>
            <Button className="reg">注册</Button>
            <Link to="/write">
            <Button className="writting">
              <span className="iconfont iconyumaobi"></span>写文章
            </Button></Link>
          </Addtion>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fouce: state.getIn(['header', 'fouce']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'loginInfo']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocuce(list) {
      list.size === 0 && dispatch(actionCreator.getList())
      dispatch(actionCreator.searchFouce())
    },
    handleInputBlur() {
      dispatch(actionCreator.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreator.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreator.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      if (page < totalPage) {
        dispatch(actionCreator.changePage(page + 1))
      } else {
        dispatch(actionCreator.changePage(1))
      }
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
