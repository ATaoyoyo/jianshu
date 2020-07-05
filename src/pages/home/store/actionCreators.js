import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable'

const getHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  topicList: result.topicList,
})

const getHomeList = (list, nextPage) => ({
  type: constants.ADD_HOME_LIST,
  articleList: fromJS(list),
  nextPage,
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      dispatch(getHomeData(result))
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const list = res.data.data
      dispatch(getHomeList(list, page + 1))
    })
  }
}
