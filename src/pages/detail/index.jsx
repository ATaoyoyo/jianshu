import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {withRouter} from 'react-router-dom'

class Detail extends Component {
  render() {
    const { title, content } = this.props
    return (
      <div style={{ background: '#f9f9f9', paddingTop: '10px' }}>
        <DetailWrapper>
          <div className="container">
            <section>
              <Header>{title}</Header>
              <pre>
                <Content dangerouslySetInnerHTML={{ __html: content }} />
              </pre>
            </section>
          </div>
          <aside>fasfs</aside>
        </DetailWrapper>
      </div>
    )
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
})

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    const action = actionCreators.getDetail(id)
    dispatch(action)
  },
})

export default connect(mapState, mapDispatch)(withRouter(Detail))
