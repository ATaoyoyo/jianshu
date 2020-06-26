import * as constants from './constants'
import { fromJS } from 'immutable'

const initState = fromJS({
  fouce: false,
  list: [],
})

export default (state = initState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOUCE:
      return state.set('fouce', true)
    case constants.SEARCH_BLUR:
      return state.set('fouce', false)
    case constants.HEADER_LIST:
      return state.set('list', action.data)
    default:
      return state
  }
}
