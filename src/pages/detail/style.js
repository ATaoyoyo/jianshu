import styled from 'styled-components'

export const DetailWrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  width: 1000px;
  height: 100%;
  border-radius: 5px;
  background: #f9f9f9;
  .container {
    float: left;
    width: 730px;
    margin-right: 10px;
    background: #fff;
    section {
      padding: 24px;
    }
  }
  aside {
    float: right;
    width: 260px;
    height: 100px;
    background: #fff;
  }
`

export const Header = styled.div`
  font-size: 30px;
  font-weight: bold;
`

export const Content = styled.div`
  color: #404040;
  img {
    width: 100%;
    border-radius: 5px;
    margin: 30px auto;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
  }
`
