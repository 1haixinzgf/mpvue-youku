<template>
  <div class="header">
      <div class="header-title">
        <div class="header-title-left">
          <img src="../../../static/images/yk-search.png" alt="" class="header-title-pic">
        </div>
        <div class="header-title-right">
        <scrollview :navs="navs"></scrollview>
        </div>
      </div>
      <div class="header-content">
        <yk-input></yk-input>
        <div class="hd-message box">
          <i class="iconfont icon-download"></i>
        </div>
        <div class="hd-download box">
          <i class="iconfont icon-download"></i>
        </div>
        <div class="hd-toast box" :class="{toast:hasToast}">
          <i class="iconfont icon-download"></i>
        </div>
      </div>
    </div>
</template>

<script>
import scrollview from '@/components/scrollview/scrollview';
import input from '@/components/input/input';
export default {
  props: {
    hasToast: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      navs: ["精选","世界杯","夜现场","pp中超","剧集","综艺","少儿","电影","直播","精选","世界杯"]
    }
  },
  components: {
    scrollview,
    'yk-input': input,
  },
  mounted() {
    console.log(this.props,this.hasToast, typeof this.hasToast)
  }
}
</script>

<style lang="stylus" scoped>
@import  '../../common/style/mixin'
  .header
    background-color #131775
    height 155rpx
    .header-title
      height 80rpx
      display flex
      justify-content space-between
      .header-title-left
        wh(60rpx, 60rpx)
        margin-left 13rpx
        margin-top 10rpx
        .header-title-pic
          wh(100%, 100%)
      .header-title-right
        width 620rpx
        height 80rpx
        margin-right 45rpx

    .header-content
      flex(space-around)
      font-size 25rpx
      color #ffffff
      text-align center
      .box
        wh(60rpx, 60rpx)
        border-radius 50%
        background-color #26298d
        line-height 66rpx
      .toast
        position relative
        &::after
          position absolute
          content ''
          wh(10rpx, 10rpx)
          border-radius 50%
          background-color red
          top 10rpx
          left 40rpx

</style>

