<template>
  <div class="intro">
    <weui-no titleText="选集">
    </weui-no>
    <div class="hide-img">
        <img src="../../../static/images/hide.png" alt="" class="hide-pic" @click="hideAnthology()">
    </div>
    <div class="intro-vip">
      <span>会员周二周五12点更新4集，非会员不更新</span>
    </div>
    <div class="intro-box">
      <div class="box-list">
        <div class="box-item" :class="{'active': changeNav == index}" @click="choosePlay(index)" v-for="(item, index) in plays" :key="index">
          <span>{{item+1}}</span>
          <div class="box-type type1" v-if="(plays-item) > 4 ? false: true" >
            {{typeText1}}
          </div>
          <div class="box-type type2" v-if="(plays-item) == 5? true : false " >
            {{typeText2}}
          </div>
          <div class="box-type type3" v-if="(plays-item) == 6 ? true : false " >
            {{typeText3}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import weuiNo from '@/components/title/weuiNo'
export default {
  props: {
     changeNav: {
       
       type: Number,
       default: 0
     }
  },
  data () {
    return {
      plays: 16,
      typeText1: '预',
      typeText2: 'vip',
      typeText3: '新'
    }
  },
  components: {
    weuiNo
  },
  methods: {
    choosePlay(index) {
      this.changeNav = index
    },
    hideAnthology() {
      this.$emit('hideAnthology')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import  '../../common/style/mixin'
  .intro
    margin-top 10rpx
    background-color #fff
    padding-top 10rpx
    padding-left 10rpx
    position relative
    .hide-img
      position absolute
      right 50rpx
      top 20rpx
      wh(40rpx, 40rpx)
      .hide-pic
        wh(100%, 100%)
    .intro-vip
      font-size 25rpx
      color #bfbfbf
      padding-left 20rpx
      padding-top 20rpx
    .intro-box
      margin-top 10rpx
      flex(space-around)
      flex-wrap wrap
      .box-item
        wh(111rpx, 110rpx)
        background-color #dbdbdb
        text-align center
        hlh(110rpx)
        font-size 35rpx
        color #282828
        display inline-block
        margin-left 30rpx
        margin-top 10rpx
        margin-bottom 30rpx
        position relative
        .box-type
          hlh(30rpx)
          color #ffffff
          font-size 22rpx
          position absolute
          wh(30rpx, 30rpx)
          left 82rpx
          top 0rpx
        .type1
          background-color #7dc5eb
        .type2
          background-color #d95a4a
        .type3
          background-color #ec8947
      .active
        color #1296db
        

</style>

