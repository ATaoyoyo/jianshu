import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addtion,
  Button,
  SearchWrapper,
} from './style'

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">Aa</NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.fouce}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              className={props.fouce ? 'fouced' : ''}
              onFocus={props.handleInputFocuce}
              onBlur={props.handleInputBlur}
            />
          </CSSTransition>
          <span
            className={
              !props.fouce
                ? 'iconfont iconfangdajing'
                : 'iconfont iconfangdajing fouced'
            }
          ></span>
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

const mapStateToProps = (state) => {
  return {
    fouce: state.header.fouce
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocuce() {
      const action = { type: 'input_fouce' }
      dispatch(action)
    },
    handleInputBlur() {
      const action = { type: 'input_blur' }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
