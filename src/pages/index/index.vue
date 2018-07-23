<template>
<div id="app">
  <div class="container">
    <div class="header">
      <div class="header-title">
        <div class="header-title-left">
          <img src="../../../static/images/yk-search.png" alt="" class="header-title-pic">
        </div>
        <div class="header-title-right">
        <scrollview></scrollview>
        </div>
      </div>
      <div class="header-content">
        <yk-input />
        <image-box></image-box>
        <image-box></image-box>
        <div style="margin-right: 10rpx">
        <image-box ></image-box></div>
      </div>
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
export default {
  components: {
    scrollview,
    'yk-input': input,
    imageBox,
    'v-swiper':swipe,
    swiperTouch,
    HotPlays
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
    width 100%
    .header-title
      height 80rpx
      display flex
      justify-content space-between
      .header-title-left
        width 60rpx
        height 60rpx
        margin-left 10rpx
        margin-top 10rpx
        .header-title-pic
          width 100%
          height 100%
      .header-title-right
        width 620rpx
        height 80rpx
        margin-right 20rpx

    .header-content 
      display flex
      justify-content space-around
      text-align center
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
