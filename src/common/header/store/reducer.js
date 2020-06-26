import * as constants from './constants'
import { fromJS } from 'immutable'

const initState = fromJS({
  fouce: false,
  list: []
})

export default (state = initState, action) => {
  if (action.type === constants.SEARCH_FOUCE) {
    return state.set('fouce', true)
  }

  if (action.type === constants.SEARCH_BLUR) {
    return state.set('fouce', false)
  }

  if(action.type === constants.HEADER_LIST) {
    return state.set('list', action.data)
  }
  return state
}
