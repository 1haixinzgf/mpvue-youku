<template>
<div id="app">
  <div class="container">
    <div class="header">
      <v-title></v-title>
    </div>
    
    <div class="swiper-content">
      <v-swiper></v-swiper>
      <swiper-touch></swiper-touch>
    </div>
    <div class="plays">
      <div class="play-title">
        <div class="title-img">
          <img src="../../../static/images/points.png" alt="" class="title-pic">
        </div>
        <div class="title-content">
          <span @click="na">正在热播</span>
        </div>
      </div>
      <hot-plays ></hot-plays>
    </div>
    
  </div>
  
</div>
</template>

<script>
import scrollview from '@/components/scrollview/scrollview'
import input from '@/components/input/input'
import imageBox from '@/components/imageBox/imageBox'
import swipe from '@/components/swiper/swipe'
import swiperTouch from '@/components/swiper/swiperTouch'
import HotPlays from '@/components/HotPlays/HotPlays'
import indexTitle from '@/components/title/indexTitle'
export default {
  components: {
    scrollview,
    'yk-input': input,
    imageBox,
    'v-swiper':swipe,
    swiperTouch,
    HotPlays,
    'v-title': indexTitle
  },
  methods: {
    na () {
      console.log(2)
      wx.switchTab({
        url: '/pages/discover/main',
        success: function(res){
        console.log("success")
        },
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import  '../../common/style/mixin'
.container
  width 100%
  .header
    background-color #131775
    height 155rpx
    
  .plays
    width 100%
    .play-title
      wh(100%, 60rpx)
      display flex
      align-items center
      .title-img
        wh(30rpx, 30rpx)
        margin-left 20rpx
        .title-pic
          wh(100%, 100%)
      .title-content
        font-weight bold
        margin-left 10rpx
</style>
