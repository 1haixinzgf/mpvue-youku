<template>
    <swiper class="swiper" indicator-dots="true" indicator-active-color="#FF800A" autoplay="true" interval="4000" circular="true">
        <swiper-item v-for="(item,index) in imgs" :key="index">
            <div class="swiper-box">
                <div class="swiper-desc">{{item.desc}}</div>
                <image :src="item.img" class="swiper-pic" />
            </div>
        </swiper-item>
    </swiper>
    
</template>

<script>
export default {
   props: {
       imgs: Array
   }
    
}
</script>
<style lang="stylus" scoped>
@import  '../../common/style/mixin.styl'
    .swiper
        wh(100%, 320rpx)
        .swiper-box
            position relative
            wh(100%, 100%)
            overflow hidden
            .swiper-desc
                position absolute
                left 10rpx
                top 240rpx
                color #ffffff
                font-size 24rpx
                width 500rpx
                otw()
            .swiper-pic
                wh(100%, 100%)           
</style>
