import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export class Write extends Component {
  render() {
    const {  login } = this.props

    return !login ? (
      <Redirect to="/login" />
    ) : (
      <div>写文章</div>
    )
  }
}

const mapState = (state) => ({
  login: state.getIn(['login', 'loginInfo']),
})


export default connect(mapState, null)(Write)
