<template>
    <div class="discovery">
        <div class="play-video">
            <video-play></video-play>
        </div>
        <div class="video-desc line">
            <div class="video-title">
                <div class="video" :class="{actived: isActived}">视频</div>
                <div class="star" :class="{actived: !isActived}">星球</div>
            </div>
            <div class="video-content">
               <weui-img imgIcon="../../../static/images/yk-logo-1.png" titleText="古剑奇谭2" isShowTo="true" toText="简介"></weui-img>
               <div class="video-title-desc">
                   <span class="title-desc-rating">{{play.rating}}</span><span>/{{play.playKind}}/{{play.playTotal}}/{{play.playNum}}</span>
               </div>
               <div class="video-content-desc">
                   <span>{{play.desc}}</span>
               </div>
            </div>
        </div>
        <div class="play-vip">
            <weui-no titleText="选集" isShowTo="true" contentText="会员周二更新好多，非会员周一更新"></weui-no>
            <div class="vip-choose">
                <scroll-box></scroll-box>
            </div>
        <div class="play-around">
                
        </div>        
        </div>
    </div>
</template>

<script>
import VideoPlay from '@/components/VideoPlay/VideoPlay'
import weuiImg from '@/components/title/weuiImg'
import weuiNo from '@/components/title/weuiNo'
import scrollBox from '@/components/scrollView/scrollBox'

export default {
    data () {
        return {
            isActived: true,
            play: {
                rating: '8.0分',
                playKind: '校园 青春 情感',
                playTotal: '3.1亿次播放量',
                playNum: '共26集',
                desc: '林小纯作为一名大一新生来到学校报到，入住时巧遇是有陈晨成，他们之间会发生什么'
            }
        }
    },
    components: {
        VideoPlay,
        // Loadingg
        weuiImg,
        weuiNo,
        scrollBox
    }
}
</script>

<style lang="stylus" scoped>
@import  '../../common/style/mixin'
    .play-video
        height 400rpx

    .video-title
        wh(250rpx, 75rpx)
        margin 0 auto
        flex(space-between)
        font-size 30rpx
        color #222222
        position relative
        .actived
            font-weight bold
            font-size 32rpx
            position relative
            &::after
                content ''
                wh(65rpx, 1rpx)
                background-color #1296db
                position absolute
                left -0rpx
                z-index 200
                top 55rpx
        &::after
            content ''
            wh(750rpx, 1rpx)
            background-color #bfbfbf
            position absolute
            left -250rpx
            z-index 200
            top 80rpx
            transform scaleY(0.4)
    
    .video-content
        padding-left 10rpx
        padding-bottom 0
    .video-title-desc
        font-size 22rpx
        color #bfbfbf
        hlh(40rpx)
        padding-left 10rpx
        .title-desc-rating
            color #e26353
    
    .video-content-desc
        color #736e6d
        font-size 22rpx
        otw()
        padding-left 10rpx
        padding-right 15rpx
        hlh(40rpx)
        
    .play-vip
        otw()
        height 230rpx
        position relative
        &::before
            content ''
            wh(750rpx, 1rpx)
            background-color #bfbfbf
            position absolute
            left 0rpx
            z-index 200
            top 10rpx
            transform scaleY(0.4)
        
        .vip-choose
            height 150rpx

</style>
