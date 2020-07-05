import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore } from './../style'
import { actionCreators } from './../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render() {
    const { list, getHomeList, page } = this.props
    return (
      <div>
        {list.map((item, index) => (
          <ListItem key={index}>
            <Link to="/detail">
              <img className="pic" src={item.get('imgUrl')} alt="" />
            </Link>
            <ListInfo>
              <h3 className="title">
                <Link
                  to="/detail"
                  style={{ textDecoration: 'none', color: '#333' }}
                >
                  {item.get('title')}
                </Link>
              </h3>
              <p className="desc">{item.get('desc')}</p>
            </ListInfo>
          </ListItem>
        ))}
        <LoadMore onClick={() => getHomeList(page)}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage']),
})

const mapDispatch = (dispatch) => ({
  getHomeList(page) {
    const action = actionCreators.getMoreList(page)
    dispatch(action)
  },
})

export default connect(mapState, mapDispatch)(List)
