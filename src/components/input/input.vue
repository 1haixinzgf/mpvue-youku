<template>
    <div class="yk-input">
        <input type="text" placeholder="这就是世界波" v-model="model" class="yk-input-search" v-on:input="searchTitle(model)">
        <div class="yk-input-img" v-show="!model.length">
            <img src="../../../static/images/yk-search.png" alt="" class="yk-input-pic">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            model: ''
        }
    },
    methods: {
        searchTitle(model) {
            wx.showToast({
                title: '暂不支持',
                icon: 'success',
                duration: 2000
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
    .yk-input
        width 450rpx
        height 60rpx
        background #26298d
        position relative
        border-radius 30rpx
        margin-left 10rpx
        color #ffffff
        .yk-input-search
            text-align center
            font-size 30rpx
            height 60rpx
            line-height 60rpx
        .yk-input-img
            position absolute
            width 40rpx
            height 40rpx
            top 12rpx
            left 95rpx
            .yk-input-pic
                width 100%
                height 100%
            
</style>
