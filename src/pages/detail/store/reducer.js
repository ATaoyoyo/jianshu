import { fromJS } from 'immutable'
import * as constants from './constants'

const initState = fromJS({
<<<<<<< HEAD
  title: '',
=======
  title: '对婚姻没有期待，反而更幸福',
>>>>>>> a534db05d2f98f3959fcbf34075f47ee647504fb
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
