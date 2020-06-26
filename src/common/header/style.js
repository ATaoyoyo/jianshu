import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({ href: '/' })`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  margin: 0 auto;
  width: 960px;
  height: 58px;
`

export const NavItem = styled.div`
  &.left {
    float: left;
  }
  &.right {
    float: right;
    font-size: 15px;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  line-height: 58px;
  padding: 0 15px;
  font-size: 17px;
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索',
})`
  width: 240px;
  height: 38px;
  line-height: 58px;
  margin-left: 15px;
  margin-top: 10px;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 19px;
  border: 1px solid #eee;
  background: #eee;
  &::placeholder {
    color: #999;
  }
`
export const Addtion = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 58px;
`

export const Button = styled.button`
  font-size: 15px;
  height: 38px;
  margin-top: 10px;
  margin-right: 20px;
  padding: 6px 12px;
  border-radius: 19px;
  border: 1px solid #ea6f5a;
  &.reg {
    width: 80px;
    color: #ea6f5a;
    background: #fff;
  }
  &.writting {
    width: 100px;
    color: #fff;
    background: #ea6f5a;
  }
`
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont{
    position: absolute;
    top: 14px;
    right: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    color: #999;
  }
`
