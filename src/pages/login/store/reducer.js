import { fromJS } from 'immutable'
import * as constants from './constants'

const initState = fromJS({
  loginInfo: false,
})

export default (state = initState, actions) => {
  switch (actions.type) {
    case constants.CHANGE_LOGIN:
      return state.set('loginInfo', actions.value)
    default:
      return state
  }
}
