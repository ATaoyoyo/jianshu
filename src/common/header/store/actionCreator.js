import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const getHeaderList = (data, totalPage) => ({
  type: constants.HEADER_LIST,
  data: fromJS(data),
  totalPage,
})

export const searchFouce = () => ({
  type: constants.SEARCH_FOUCE,
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
})

export const getList = () => {
  return (dispatch) => {
    axios
      .get('/api/headerList.json')
      .then((res) => {
        const data = res.data.data
        const totalPage = Math.ceil(data.length / 10)
        dispatch(getHeaderList(data, totalPage))
      })
      .catch((err) => console.log(err))
  }
}

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER,
})

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE,
})

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page,
})
