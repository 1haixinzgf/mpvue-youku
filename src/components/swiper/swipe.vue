<template>
    <swiper class="swiper" indicator-dots="true" indicator-active-color="#FF800A" autoplay="true" interval="2000" circular="true">
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
    data() {
        return {
            imgs: [{
                img: "../../../static/images/swiper1.jpg",
                desc: "你可以为 props 中的值提供一个带有验证需求的对象"
                },
                {
                img: "../../../static/images/swiper2.jpg",
                desc: "当 prop 验证失败的时候，(开发环境构建版本的) Vue 将会产生一个控制台的警告。"
                },
                {
                img: "../../../static/images/swiper3.jpg",
                desc: "当 prop 验证失败的时候， 将会产生一个控制台的警告。"
                },
                {
                img: "../../../static/images/swiper4.jpg",
                desc: "当 prop 验证失败的时候， Vue 将会产生一个控制台的警告。"
                },
                {
                img: "../../../static/images/swiper5.jpg",
                desc: "当 prop 验证失败的时候， Vue 将会产生一个控制台的警告。"
                }
                ]
        }
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
