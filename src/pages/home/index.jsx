import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import { List, Recommend, Topic, Writer } from './components'
import { actionCreators } from './store'

class Home extends Component {
  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <div className="banner-img">
              <img
                src="https://upload.jianshu.io/admin_banners/web_images/4984/79ff791e7ddb523246801d656818282e66d40d98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                alt=""
              />
            </div>
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
        </HomeWrapper>
      </div>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
})

export default connect(null, mapDispatch)(Home)
