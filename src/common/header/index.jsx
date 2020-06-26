import React, { Component } from 'react'
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

class Header extends Component {
  constructor() {
    super()
    this.state = {
      fouced: false,
    }
    this.handleInputFocuce = this.handleInputFocuce.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }
  render() {
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
              in={this.state.fouced}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.state.fouced ? 'fouced' : ''}
                onFocus={this.handleInputFocuce}
                onBlur={this.handleInputBlur}
              />
            </CSSTransition>
            <span
              className={
                !this.state.fouced
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

  handleInputFocuce() {
    this.setState({
      fouced: true,
    })
  }

  handleInputBlur() {
    this.setState({
      fouced: false,
    })
  }
}

export default Header
