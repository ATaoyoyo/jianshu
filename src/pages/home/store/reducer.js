import { fromJS } from 'immutable'
import * as constants from './constants'

const initState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl:
        'https://upload.jianshu.io/users/upload_avatars/2564926/88bfdbeeb083.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
    },
    {
      id: 2,
      title: '手绘',
      imgUrl:
        'https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
    },
  ],
  articleList: [
    {
      id: 1,
      title: '武汉高管出租车内痛哭：“不要瞧不起那个深夜崩溃的中年人”',
      desc:
        '前段时间，看到秋叶老师发的一条微博： “今天老婆打的，的士司机主动给她说，刚刚上车的一个男的，在车上就哭起来了。 这个人年前还是一个企业高管，年...',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/2425636-9b5676d54f686366.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    },
    {
      id: 2,
      title: '武汉高管出租车内痛哭：“不要瞧不起那个深夜崩溃的中年人”',
      desc:
        '前段时间，看到秋叶老师发的一条微博： “今天老婆打的，的士司机主动给她说，刚刚上车的一个男的，在车上就哭起来了。 这个人年前还是一个企业高管，年...',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/2425636-9b5676d54f686366.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    },
    {
      id: 3,
      title: '武汉高管出租车内痛哭：“不要瞧不起那个深夜崩溃的中年人”',
      desc:
        '前段时间，看到秋叶老师发的一条微博： “今天老婆打的，的士司机主动给她说，刚刚上车的一个男的，在车上就哭起来了。 这个人年前还是一个企业高管，年...',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/2425636-9b5676d54f686366.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    },
    {
      id: 4,
      title: '武汉高管出租车内痛哭：“不要瞧不起那个深夜崩溃的中年人”',
      desc:
        '前段时间，看到秋叶老师发的一条微博： “今天老婆打的，的士司机主动给她说，刚刚上车的一个男的，在车上就哭起来了。 这个人年前还是一个企业高管，年...',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/2425636-9b5676d54f686366.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    },
    {
      id: 5,
      title: '武汉高管出租车内痛哭：“不要瞧不起那个深夜崩溃的中年人”',
      desc:
        '前段时间，看到秋叶老师发的一条微博： “今天老婆打的，的士司机主动给她说，刚刚上车的一个男的，在车上就哭起来了。 这个人年前还是一个企业高管，年...',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/2425636-9b5676d54f686366.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    },
  ],
  recommendList: [
    {
      id: 1,
      imgUrl:
        'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png',
    },
    {
      id: 2,
      imgUrl:
        'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
    },
    {
      id: 3,
      imgUrl:
        'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png',
    },
    {
      id: 4,
      imgUrl:
        'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png',
    },
  ],
  articlePage: 1,
})

export default (state = initState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      })
    case constants.ADD_HOME_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.articleList),
        articlePage: action.nextPage,
      })
    default:
      return state
  }
}
