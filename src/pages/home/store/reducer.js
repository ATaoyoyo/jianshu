import { fromJS } from 'immutable'

const initState = fromJS({
  topPicList: [
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
        'https://upload-images.jianshu.io/upload_images/3540924-2d4dcafd6f2ecbfe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
    {
      id: 2,
      title: '武汉高管出租车内痛哭：“不要瞧不起那个深夜崩溃的中年人”',
      desc:
        '前段时间，看到秋叶老师发的一条微博： “今天老婆打的，的士司机主动给她说，刚刚上车的一个男的，在车上就哭起来了。 这个人年前还是一个企业高管，年...',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/3540924-2d4dcafd6f2ecbfe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
    {
      id: 3,
      title: '武汉高管出租车内痛哭：“不要瞧不起那个深夜崩溃的中年人”',
      desc:
        '前段时间，看到秋叶老师发的一条微博： “今天老婆打的，的士司机主动给她说，刚刚上车的一个男的，在车上就哭起来了。 这个人年前还是一个企业高管，年...',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/3540924-2d4dcafd6f2ecbfe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
    {
      id: 4,
      title: '武汉高管出租车内痛哭：“不要瞧不起那个深夜崩溃的中年人”',
      desc:
        '前段时间，看到秋叶老师发的一条微博： “今天老婆打的，的士司机主动给她说，刚刚上车的一个男的，在车上就哭起来了。 这个人年前还是一个企业高管，年...',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/3540924-2d4dcafd6f2ecbfe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
    {
      id: 5,
      title: '武汉高管出租车内痛哭：“不要瞧不起那个深夜崩溃的中年人”',
      desc:
        '前段时间，看到秋叶老师发的一条微博： “今天老婆打的，的士司机主动给她说，刚刚上车的一个男的，在车上就哭起来了。 这个人年前还是一个企业高管，年...',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/3540924-2d4dcafd6f2ecbfe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
  ],
})

export default (state = initState, action) => {
  return state
}
