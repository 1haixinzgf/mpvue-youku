<template>
    <div class="swiper">
        <swiper indicator-dots="true" autoplay="true"  indicator-color="rgba(0,0,0,.8)" >
            <block v-for="(item, index) in imgs" :key="index">
                <swiper-item>
                    <image :src="item.img" class="img-item" />
                    <!-- <div class="img-desc">{{item.desc}}</div> -->
                </swiper-item>
            </block>
        </swiper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgs: [
                {
                img: "../../../static/images/yk-search.png",
                desc: "你可以为 props 中的值提供一个带有验证需求的对象"
                },
                {
                img: "../../../static/images/yk-search.png",
                desc: "当 prop 验证失败的时候，(开发环境构建版本的) Vue 将会产生一个控制台的警告。"
                },
                {
                img: "../../../static/images/yk-search.png",
                desc: "当 prop 验证失败的时候， 将会产生一个控制台的警告。"
                },
                {
                img: "../../../static/images/yk-search.png",
                desc: "当 prop 验证失败的时候， Vue 将会产生一个控制台的警告。"
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .swiper
        background-color red
        width 100%
        // height 450rpx
        position relative
        .swiper-item
            width 750rpx
            .item
                width 100%
                height 100%
            .img-desc
                position absolute
                width 600rpx
                height 50rpx
                line-height 50rpx
                text-align left
                text-overflow ellipsis
                color #ffffff
                font-size 30rpx
                z-index 999

                
</style>
