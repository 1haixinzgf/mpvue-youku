<template>
<div id="app">
  <div class="container">
    <div class="header">
      <v-title hasToast="true"></v-title>
    </div>
    <div class="swiper-content">
      <v-swiper :imgs="imgs"></v-swiper>
      <swiper-touch :swiperContent="swiperContent" @showMore="showMore()"></swiper-touch>
    </div>
    <div class="plays">
      <div class="play-title">
        <div class="title-img">
          <img src="../../../static/images/hot.png" alt="" class="title-pic">
        </div>
        <div class="title-content">
          <span>正在热播</span>
        </div>
      </div>
      <hot-plays :plays="plays" @deletePlay='deletePlay'></hot-plays>
    </div>
  </div>
</div>
</template>

<script>
import swipe from '@/components/swiper/swipe'
import swiperTouch from '@/components/swiper/swiperTouch'
import HotPlays from '@/components/HotPlays/HotPlays'
import indexTitle from '@/components/title/indexTitle'
import fly from '@/utils/fly'
import CODE_STATUS from '@/utils/config'
export default {
  data () {
    return {
      imgs: [],
      swiperContent: [],
      plays: []
    }
  },
  components: {
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
    },
    deletePlay(index) {
      console.log(index,222)
      wx.showModal({
        title: '提示',
        content: '是否不感兴趣',
        success: (res) => {
          if (res.confirm) {
            this.plays.splice(index, 1)
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    _getSwiper () {
        wx.showLoading({
        title: '加载中',
      })
      this.$http.get('swiper#!method=get')
      .then((res) => {
        if (res.status = CODE_STATUS) {
          this.imgs = res.data.data.imgs;
          this.plays = res.data.data.plays
          wx.hideLoading()
        }
      }).catch ((e) => {
        console.log(e)
      })
    },
    _getSwiperTouch () {
        wx.showLoading({
        title: '加载中',
      })
      this.$http.get('swiperTouch#!method=get')
      .then((res) => {
        if (res.status = CODE_STATUS) {
          this.swiperContent = res.data.data.swiperContent
          wx.hideLoading()
        }
      }).catch ((e) => {
        console.log(e)
      })
    },
    showMore () {
      this.$http.get('swiperTouch#!method=get')
      .then((res) => {
        if (res.status = CODE_STATUS) {
          this.swiperContent.push(...(res.data.data.swiperContent))
        }
      })
    }
  },
  created () {
    this._getSwiper();
    this._getSwiperTouch();
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
        wh(40rpx, 40rpx)
        margin-left 20rpx
        margin-bottom 10rpx
        .title-pic
          wh(100%, 100%)
      .title-content
        font-weight bold
        margin-left 10rpx
</style>
