import React from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from './../style'

const Recommend = (props) => {
  return (
    <RecommendWrapper>
      {props.list.map((item) => {
        return (
          <RecommendItem key={item.get('id')}>
            <img src={item.get('imgUrl')} alt="" />
          </RecommendItem>
        )
      })}
    </RecommendWrapper>
  )
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList']),
})

export default connect(mapState, null)(Recommend)
