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
})

export default (state = initState, action) => {
  return state
} 
