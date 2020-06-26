import * as constants from './constants'
import { fromJS, set } from 'immutable'

const initState = fromJS({
  fouce: false,
})

export default (state = initState, action) => {
  if (action.type === constants.SEARCH_FOUCE) {
    return state.set('fouce', true)
  }

  if (action.type === constants.SEARCH_BLUR) {
    return state.set('fouce', false)
  }
  return state
}
