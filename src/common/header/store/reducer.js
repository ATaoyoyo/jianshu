import * as constants from './constants'

const initState = {
  fouce: false,
}

export default (state = initState, action) => {
  if (action.type === constants.SEARCH_FOUCE) {
    return {
      fouce: true,
    }
  }

  if (action.type === constants.SEARCH_BLUR) {
    return {
      fouce: false,
    }
  }
  return state
}
