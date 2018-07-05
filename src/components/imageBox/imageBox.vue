<template>
    <div class="image-box" >
        <img :src="imageUrl" alt="" class="box-pic">
    </div>
</template>

<script>
export default {
    data() {
        return {
            imageUrl: '../../../static/images/yk-search.png'
        }
    }
}
</script>

<style lang="stylus" scoped>
    .image-box
        width 50rpx
        height 50rpx
        border none
        background-color #26298d
        padding-top 10rpx
        padding-left 10rpx
        border-radius 50%
        .box-pic
            width 80%
            height 80%
</style>
