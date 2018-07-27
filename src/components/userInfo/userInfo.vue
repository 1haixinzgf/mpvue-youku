<template>
  <div class="userInfo">
    <div class="user-Avar">
      <img :src="user.avar" alt="" class="userAvar-pic">
    </div>
    <div class="user-desc">
      <div class="username">{{user.name}}</div>
      <div class="user-pubTime">{{user.pubTime}}</div>
    </div>
    <div class="user-vip" v-if="user.vip">
      <img :src="user.vip" alt="" class="user-vip-pic">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        avar: '../../../static/images/swiper1.jpg',
        name: '支付宝用户1286848',
        pubTime: '07月12日',
        vip: '../../../static/images/swiper1.jpg'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import  '../../common/style/mixin'
  .userInfo
    wh(100%, 150rpx)
    flex(space-between)
    .user-Avar
      wh(80rpx, 80rpx)
      vertical-align top
      .userAvar-pic
        wh(100%, 100%)
        border-radius 50%
    .user-desc
      max-width 50%
      font-size 32rpx
      color #d81e06
      margin-left -30rpx
      .username
        otw()
      .user-pubTime
        color #2c2c2c
        font-size 25rpx
    .user-vip
      margin-top -60rpx
      wh(30rpx, 30rpx)

    .user-vip-pic
      wh(100%, 100%)
</style>
