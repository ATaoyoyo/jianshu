import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginBox, LoginInput, Button } from './style'
import { actionCreators } from './store'

export class Login extends Component {
  render() {
    const { handleLogin, login } = this.props

    return login ? (
      <Redirect to="/" />
    ) : (
      <div>
        <LoginWrapper>
          <LoginBox>
            <LoginInput
              placeholder="账号"
              ref={(input) => (this.account = input)}
            />
            <LoginInput
              placeholder="密码"
              type="password"
              ref={(input) => (this.password = input)}
            />
            <Button
              onClick={() =>
                handleLogin(this.account.value, this.password.value)
              }
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      </div>
    )
  }
}

const mapState = (state) => ({
  login: state.getIn(['login', 'loginInfo']),
})

const mapDispatch = (dispatch) => ({
  handleLogin(account, password) {
    const action = actionCreators.login(account, password)
    dispatch(action)
  },
})

export default connect(mapState, mapDispatch)(Login)
