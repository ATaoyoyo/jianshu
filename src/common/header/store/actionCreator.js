import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

export const searchFouce = () => ({
  type: constants.SEARCH_FOUCE,
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
})

const getHeaderList = (data) => ({
  type: constants.HEADER_LIST,
  data: fromJS(data)
})

export const getList = () => {
  return (dispatch) => {
    axios
      .get('/api/headerList.json')
      .then((res) => {
        const data = res.data.data
        dispatch(getHeaderList(data))
      })
      .catch((err) => console.log(err))
  }
}
