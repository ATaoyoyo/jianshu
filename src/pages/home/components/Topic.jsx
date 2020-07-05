import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from './../style'

class Topic extends PureComponent {
  render() {
    return (
      <div>
        <TopicWrapper>
          {this.props.list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img className="topic-img" src={item.get('imgUrl')} alt="" />
                {item.get('title')}
              </TopicItem>
            )
          })}
        </TopicWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'topicList']),
})

export default connect(mapStateToProps, null)(Topic)
