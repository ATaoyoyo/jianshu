import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
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
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>
            <i className="iconfont icontop"></i>
          </BackTop>
        ) : null}
      </div>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTop)
  }

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTop)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll']),
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
  changeScrollTop() {
    if (document.documentElement.scrollTop > 200) {
      const action = actionCreators.getScrollTop(true)
      dispatch(action)
    } else {
      const action = actionCreators.getScrollTop(false)
      dispatch(action)
    }
  },
})

export default connect(mapState, mapDispatch)(Home)
