import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style'

export default class Detail extends Component {
  render() {
    return (
      <div style={{ background: '#f9f9f9', paddingTop: '10px' }}>
        <DetailWrapper>
          <div className="container">
            <section>
              <Header>对婚姻没有期待，反而更幸福</Header>
              <Content>
                <img
                  src="https://upload-images.jianshu.io/upload_images/16293134-e1179189de4cf3de?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp"
                  alt=""
                />
                <p>
                  我问了几个周围的闺蜜朋友。
                  小蝶说：“因为他对我很好，我觉得这世上再也找不到第二个对我这样好的人了。”
                  蜜儿说：“因为我爱他，这辈子如果和他擦肩而过，我觉得我会后悔一生。”
                  大美说：“因为我到年龄了，他追了我3年，我妈觉得我再不答应就没人要了，除了三万彩礼，啥都没要，就把我送出门了。”
                  大美的表情略显无奈，可是到头来我们却发现，只有大美的婚姻是最幸福的。我们探讨了一下深层次的原因，总结了一下，归根结底，是因为在结婚前，对婚姻的期待值不同。
                </p>
              </Content>
            </section>
          </div>
          <aside>fasfs</aside>
        </DetailWrapper>
      </div>
    )
  }
}
