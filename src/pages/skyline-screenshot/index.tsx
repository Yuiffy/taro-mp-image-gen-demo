import {View, Text, Snapshot, Image} from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import {AtButton} from "taro-ui";
import React, {useRef, useState} from "react";
import './index.scss'


export default function SkylineScreenshot() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  const snapshotRef = useRef()
  const [data, setData] = useState('');
  const makeScreenshotByNode = (node)=>{
    // const node = what.node()
    console.log('node=',node);
    node.takeSnapshot({
      type: 'arraybuffer',
      format: 'png',
      success: (res) => {
        console.log('take res', res);
        const resultData: ArrayBuffer =res?.data;
// 将 ArrayBuffer 转换为 Base64 字符串
        const base64 = Taro.arrayBufferToBase64(resultData);

// 将 Base64 字符串转换为图片的 src
        const src = 'data:image/jpeg;base64,' + base64;
        console.log('src=',src);
        setData(src);
        // TODO: 现在还是没截成功，截出来的dataURL拷贝到chrome里面是白色图片；而且这个小程序里setData了它也没展示图片，呃啊。
      },
      fail(res) {
        console.log('take fail', res);
      }
    })
  }

  const screenshotStart = ()=> {
    Taro.createSelectorQuery()
      .select("#target")
      .node()
      .exec(res => {
        const node = res[0].node
        makeScreenshotByNode(node);
      });
    // makeScreenshotByNode(snapshotRef.current)
  }

  return (
    <View className='skyline-screenshot'>
      <Text>Hello world!</Text>
      <Snapshot id='target'>
        <View>123eaea饿啊饿啊啊啊啊啊</View>
        <AtButton onClick={screenshotStart}>一个按钮</AtButton>
        <Image
          src={data} style={{width: 100, height: 100, background: 'green'}}
        />
        <View>纳尼？</View>
      </Snapshot>
    </View>
  )
}
