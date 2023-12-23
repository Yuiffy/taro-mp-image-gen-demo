import { View, Text } from '@tarojs/components'
import Taro, {useLoad} from '@tarojs/taro'
import {AtButton} from "taro-ui";
import './index.scss'


export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <AtButton onClick={()=>{
        Taro.navigateTo({
          url: '/pages/skyline-screenshot/index',
        })
      }}
      >skyline方式</AtButton>
    </View>
  )
}
