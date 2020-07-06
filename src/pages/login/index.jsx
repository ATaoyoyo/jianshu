import React, { Component } from 'react'
import { LoginWrapper, LoginBox, LoginInput, Button } from './style'

export class Login extends Component {
  render() {
    return (
      <div>
        <LoginWrapper>
          <LoginBox>
            <LoginInput placeholder="账号" />
            <LoginInput placeholder="密码" />
            <Button>登录</Button>
          </LoginBox>
        </LoginWrapper>
      </div>
    )
  }
}

export default Login
