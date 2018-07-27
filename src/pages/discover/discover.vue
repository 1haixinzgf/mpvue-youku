<template>
    <div class="discovery">
        <div class="play-video" >
            <video-play></video-play>
        </div>
        <div class="play-container" v-if="isShowAllDesc">
            <div class="video-desc line">
                <div class="video-title">
                    <div class="video" :class="{actived: isActived1}" @click="changeTopic1()">视频</div>
                    <div class="star" :class="{actived: isActived2}" @click="changeTopic2()">星球</div>
                </div>
                <div v-if="false">
                    <div class="video-content" >
                        <weui-img imgIcon="../../../static/images/yk-logo-1.png" titleText="古剑奇谭2" isShowTo="true" toText="简介"></weui-img>
                        <div class="video-title-desc">
                            <span class="title-desc-rating">{{play.rating}}</span><span>/{{play.playKind}}/{{play.playTotal}}/{{play.playNum}}</span>
                        </div>
                        <div class="video-content-desc">
                            <span>{{play.desc}}</span>
                        </div>
                    </div>
                    <div class="play-vip">
                        <weui-no titleText="选集" v-on:navigateColl="navigateColl" isShowTo="true" contentText="会员周二更新好多，非会员周一更新"></weui-no>
                        <div class="vip-choose">
                            <scroll-box></scroll-box>
                        </div>    
                    </div>
                    <div class="plays-around">
                        <div class="around-title">
                            <weui-no titleText="周边视频" isShowTo="true"></weui-no>
                        </div>
                        <div class="around-video">
                            <scroll-video></scroll-video>
                        </div>
                    </div>
                    <div class="plays-holiday">
                        <div class="around-title">
                            <weui-no titleText="必看，暑假好剧都在这里" isShowTo="true" contentText="全部"></weui-no>
                        </div>
                        <div class="around-video">
                            <scroll-video></scroll-video>
                        </div>
                    </div>
                </div>
                <div class="play-comment">
                    <div class="userInfo">
                      <user-info></user-info>  
                    </div>
                    <laud></laud>
                </div>
                <div class="user-comment">
                    <span class="comment-hot">
                        <i class="iconfont icon-hotComment icon-comment"></i>
                        <span>热评</span>
                    </span>
                    <span class="comment-content">{{commentContent}}</span>
                </div>
            </div>
            <div class="plays-choose" v-if="isShowPlays" :animation="animationData">
                <play-box v-on:hideAnthology="hideAnthology"></play-box>
            </div>
        </div>
    </div>
</template>

<script>
import VideoPlay from '@/components/VideoPlay/VideoPlay'
import weuiImg from '@/components/title/weuiImg'
import weuiNo from '@/components/title/weuiNo'
import scrollBox from '@/components/scrollView/scrollBox'
import playBox from './playBox'
import scrollVideo from '@/components/scrollView/scrollVideo'
import userInfo from '@/components/userInfo/userInfo'
import Laud from '@/components/laud/Laud'
export default {
    data () {
        return {
            isActived1: true,
            isActived2: false,
            play: {
                rating: '8.0分',
                playKind: '校园 青春 情感',
                playTotal: '3.1亿次播放量',
                playNum: '共26集',
                desc: '林小纯作为一名大一新生来到学校报到，入住时巧遇是有陈晨成，他们之间会发生什么'
            },
            isShowAllDesc: true,
            isShowV: false,
            animationData: {},
            isShowPlays: false,
            commentContent: '这是第一条热评，这是第一条热评，这是第一条热评，这是第一条热评，这是第一条热评，这是第一条热评，'
        }
    },
    components: {
        VideoPlay,
        weuiImg,
        weuiNo,
        scrollBox,
        playBox,
        scrollVideo,
        userInfo,
        Laud
    },
    methods: {
        navigateColl () {
            const animationShowHeight = 350
             var animation = wx.createAnimation({
            duration: 150,
            timingFunction: "linear",
            delay: 0
        })
            animation= animation.translateY(animationShowHeight).step()
            this.animationData = animation.export(),
            this.isShowPlays = true
            setTimeout(function () {
                animation.translateY(0).step()
                this.animationData=animation.export()
                this.isShowAllDesc = false
                }.bind(this), 150)
            }, 
        hideAnthology () {
            const animationShowHeight = 350
             var animation = wx.createAnimation({
            duration: 150,
            timingFunction: "linear",
            delay: 0
        })
            animation= animation.translateY(animationShowHeight).step()
            this.animationData = animation.export(),
            this.isShowAllDesc = true
            setTimeout(function () {
                animation.translateY(0).step()
                this.animationData=animation.export()
                this.isShowPlays = false
            }.bind(this), 150)
        },
        changeTopic1() {
            this.isActived1 = true
            this.isActived2 = false
        },
        changeTopic2() {
            this.isActived1 = false
            this.isActived2 = true
        }
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
            top 70rpx
            transform scaleY(0.4)
    
    .video-content
        padding-left 10rpx
        padding-bottom 0
    .video-title-desc
        font-size 25rpx
        color #bfbfbf
        hlh(40rpx)
        padding-left 10rpx
        .title-desc-rating
            color #e26353
    
    .video-content-desc
        color #736e6d
        font-size 25rpx
        otw()
        padding-left 10rpx
        padding-right 15rpx
        hlh(50rpx)
        
    .play-vip
        otw()
        height 210rpx
        position relative
        margin-top 10rpx
        &::before
            content ''
            wh(750rpx, 1rpx)
            background-color #bfbfbf
            position absolute
            left 0rpx
            z-index 200
            top 10rpx
            transform scaleY(0.4)
        &::after
            content ''
            wh(750rpx, 1rpx)
            background-color #bfbfbf
            position absolute
            left 0rpx
            z-index 200
            top 208rpx
            transform scaleY(0.4)
        
        .vip-choose
            height 100rpx
    .plays-choose
        height calc(100%-200rpx)
        width 100%
        position fixed
        top 400rpx
        z-index 200
        
    .play-around
        .around-title
            height 100rpx
        .around-video
            height 210rpx
    .plays-holiday
        position relative
        &::before
            content ''
            wh(750rpx, 1rpx)
            background-color #bfbfbf
            position absolute
            z-index 200
            top -6rpx
            transform scaleY(0.4)
        .around-title
            height 100rpx
        .around-video
            height 220rpx
        
    .play-comment
        flex(space-between)
        .userInfo
            margin-left 20rpx
    .user-comment
        width 90%
        margin 0 auto 
        .comment-hot
            font-size 23rpx
            color red
            border 1rpx solid red
            wh(80rpx, 40rpx)
            .icon-comment
                display inline-block
        .comment-content
            font-size 28rpx
            word-wrap wrap
            color #282828
            pl5rpx


</style>
