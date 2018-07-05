<template>
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
</div>
  
</template>

<script>
import scrollview from '@/components/scrollview/scrollview'
import input from '@/components/input/input'
import imageBox from '@/components/imageBox/imageBox'
export default {
  components: {
    scrollview,
    'yk-input': input,
    imageBox
  }
}
</script>

<style lang="stylus" scoped>
.header
  background-color #131775
  height 300rpx
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
</style>
