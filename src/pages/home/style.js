import styled from 'styled-components'

export const HomeWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: 30px auto;
  width: 960px;
`

export const HomeLeft = styled.div`
  float: left;
  margin-right: 25px;
  width: 640px;
  .banner-img {
    width: 640px;
  }
  img {
    width: 100%;
  }
`

export const HomeRight = styled.div`
  float: right;
  width: 295px;
`
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
`

export const TopicItem = styled.div`
  float: left;
  overflow: hidden;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  height: 32px;
  line-height: 32px;
  text-align: right;
  background: #f7f7f7;
  border-radius: 4px;
  box-sizing: border-box;
  .topic-img {
    display: block;
    float: left;
    margin-right: 10px;
    width: 32px;
    height: 32px;
  }
`
