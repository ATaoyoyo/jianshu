import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import { List, Recommend, Topic, Writer } from './components'

export default class Home extends Component {
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
}
