import * as constants from './constants'
import { fromJS } from 'immutable'

const initState = fromJS({
  fouce: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
})

export default (state = initState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOUCE:
      return state.set('fouce', true)
    case constants.SEARCH_BLUR:
      return state.set('fouce', false)
    case constants.HEADER_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage,
      })
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}
