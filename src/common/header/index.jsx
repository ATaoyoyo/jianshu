import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreator } from './store'
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
    const { fouce, list } = this.props
    if (fouce) {
      return (
        <SearchContainer>
          <SearchTitle>
            热门搜索
            <SearchSwitch>换一批</SearchSwitch>
          </SearchTitle>
          {list.map((item) => {
            return <SearchItem key={item}>{item}</SearchItem>
          })}
        </SearchContainer>
      )
    }
    return null
  }

  render() {
    const { fouce, handleInputBlur, handleInputFocuce } = this.props
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
          <SearchWrapper>
            <CSSTransition in={fouce} timeout={200} classNames="slide">
              <NavSearch
                className={fouce ? 'fouced' : ''}
                onFocus={handleInputFocuce}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <span
              className={
                !fouce
                  ? 'iconfont iconfangdajing'
                  : 'iconfont iconfangdajing fouced'
              }
            ></span>
            {this.showSearchItem()}
          </SearchWrapper>
          <Addtion>
            <Button className="reg">注册</Button>
            <Button className="writting">
              <span className="iconfont iconyumaobi"></span>写文章
            </Button>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocuce() {
      dispatch(actionCreator.getList())
      dispatch(actionCreator.searchFouce())
    },
    handleInputBlur() {
      dispatch(actionCreator.searchBlur())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
