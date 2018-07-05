<template>
    <div class="yk-input">
        <input type="text" placeholder="这就是世界波" v-model="model" class="yk-input-search">
        <div class="yk-input-img">
        <img src="../../../static/images/yk-search.png" alt="" class="yk-input-pic">
    </div></div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

}
</script>

<style lang="stylus">
    .yk-input
        width 400rpx
        height 60rpx
        background #26298d
        position relative
        border-radius 30rpx
        margin-left 10rpx
        color #ffffff
        .yk-input-search
            text-align center
            font-size 30rpx
            line-height 30rpx
        .yk-input-img
            position absolute
            width 40rpx
            height 40rpx
            top 9rpx
            left 70rpx
            .yk-input-pic
                width 100%
                height 100%
            
</style>
