<template>
    <div class="discovery">
        <div class="play-video">
            <video-play></video-play>
        </div>
        <div class="video-desc">
            <div class="video-title">
                <div class="video" :class="{actived: isActived}">视频</div>
                <div class="star" :class="{actived: !isActived}">星球</div>
            </div>
            <div class="video-content">
               <weui-img imgIcon="../../../static/images/yk-logo-1.png" titleText="古剑奇谭2" isShowTo="true" toText="简介"></weui-img>
               <div class="video-title-desc">
                   <span>{{play.rating}}/{{play.playKind}}/{{play.playTotal}}/{{play.playNum}}</span>
               </div>
               <div class="video-content-desc">
                   <span>{{play.desc}}</span>
               </div>
            </div>

        </div>
    </div>
</template>

<script>
import VideoPlay from '@/components/VideoPlay/VideoPlay'
import weuiImg from '@/components/title/weuiImg'
export default {
    data () {
        return {
            isActived: true,
            play: {
                rating: '',
                playKind: '',
                playTotal: '',
                playNum: '',
                desc: ''
            }
        }
    },
    components: {
        VideoPlay,
        // Loadingg
        weuiImg
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


        
    
</style>
