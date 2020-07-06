import { fromJS } from 'immutable'
import * as constants from './constants'

const initState = fromJS({
  title: '',
  content: '',
})

const updateContent = (state, data) => {
  return state.merge({
    title: data.title,
    content: data.content,
  })
}

export default (state = initState, actions) => {
  switch (actions.type) {
    case constants.DETAIL_CONTENT:
      return updateContent(state, actions.data)
    default:
      return state
  }
}
