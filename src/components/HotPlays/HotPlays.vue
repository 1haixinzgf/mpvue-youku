<template>
    <div class="plays-container">
        <div class="play-item">
            <div class="play-img">
                <div class="play-img-title">
                    <img src="../../../static/images/swiper3.jpg" alt="" class="play-img-pic">
                </div>
                <div class="play-img-sign">
                    <img src="../../../static/images/yk-search.png" alt="" class="play-sign-pic">
                </div>
                <div class="play-update">
                    <span>更新到26集</span>
                </div>
            </div>
            <div class="play-content">
                <div class="play-title">
                    <span>镇魂</span>
                </div>
                <div class="play-desc">
                    <div>
                        <span>推销员程序员</span>
                    </div>
                    <div class="play-desc-img">
                        <img src="../../../static/images/points.png" alt="" class="play-desc-pic">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import  '../../common/style/mixin'
    .plays-container
        wh(370rpx, 350rpx)
        .play-item
            margin-right 5rpx
            wh(370rpx, 350rpx)
            .play-img
                wh(370rpx, 200rpx)
                position relative
                .play-img-title
                    wh(370rpx, 200rpx)
                    .play-img-pic
                        wh(100%, 100%)
                .play-img-sign
                    position absolute
                    top 2rpx
                    right 10rpx
                    wh(50rpx, 25rpx)
                    .play-sign-pic
                        wh(100%, 100%)
                .play-update
                    text-align right
                    position absolute
                    bottom 12rpx
                    right 10rpx
                    display inline-block
                    color #ffffff
                    font-size 22rpx

            .play-content
                width 370rpx
                height 120rpx
                margin-top 10rpx
                margin-left 12rpx
                .play-title
                    font-size 28rpx
                    color #282828
                    text-align left
                .play-desc
                    font-size 22rpx 
                    color #383838
                    margin-top 7rpx
                    flex(space-between)
                    .play-desc-img
                        wh(25rpx, 25rpx)
                        margin-right 20rpx
                        .play-desc-pic
                            wh(100%, 100%)


</style>
