import axios from 'axios'
import * as constants from './constants'

export const getDetail = (id) => {
  return (dispatch) => {
    axios
      .get('/api/detail.json?id=' + id)
      .then((res) => {
        const data = res.data.data
        dispatch({ data, type: constants.DETAIL_CONTENT })
      })
      .catch((err) => console.log(err))
  }
}
