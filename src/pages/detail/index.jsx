import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

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
    this.props.getDetail()
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
})

const mapDispatch = (dispatch) => ({
  getDetail() {
    const action = actionCreators.getDetail()
    dispatch(action)
  },
})

export default connect(mapState, mapDispatch)(Detail)
