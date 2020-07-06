import axios from 'axios'
import * as constants from './constants'

const changeLogin = (value) => ({
  type: constants.CHANGE_LOGIN,
  value,
})

export const login = (account, password) => {
  return (dispatch) => {
    axios
      .get('/api/login.json?account=' + account + '&password=' + password)
      .then((res) => {
        const data = res.data.data
        return !data ? dispatch(changeLogin(true)) : alert('登录失败！');
    })
      .catch((err) => console.log(err))
  };
}
