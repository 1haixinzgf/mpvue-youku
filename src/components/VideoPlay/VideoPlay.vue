<template>
    <div class="video">
        <div class="video-play-img" v-if="isPlay">
            <div class="play-img" @click="isPlaying()">
                <img :src="videoImg" alt="" class="play-pic">
            </div>
            <div class="video-browses">
                <div class="save-super">
                    <div class="btn save-browse" @click="isPlaying()">省流</div>
                    <div class="browse-text">76M</div>
                </div>
                <div class="save-super">
                    <div class="btn super-browse" @click="isPlaying()">超清</div>
                    <div class="browse-text">377M</div>
                </div>
            </div>
            <div class="showToast">
                <div >提示: 即将消耗手机流量  <span class="buy" @click="buyBrowse()">购买流量包></span></div>
            </div>
        </div>
        <div class="video-play-img" v-else>
            <video :src="videoPlay" class="video-playing" autoplay="isAutoplay"></video>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            videoImg: '../../../static/images/swiper3.jpg',
            videoPlay: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
            isPlay: true,
            isAutoplay: false
        }
    },
    methods: {
        isPlaying () {
            this.isPlay = !this.isPlay
        },
        buyBrowse () {
            wx.showToast({
                title: '暂未开放',
                icon: 'success',
                duration: 2000
            })
        }
    },
    created () {
        wx.getNetworkType({ // 判断一进来的网络状态
            success: (res) => {
                const networkType = res.networkType
                if (networkType == 'wifi') {
                    this.isAutoplay = true
                    this.isPlay = false
                }
            }
        })
    }
}
</script>
<style lang="stylus" scoped>
@import  '../../common/style/mixin'
    .video
        wh(100%, 400rpx)
        .video-play-img
            position relative
            height 400rpx
            .play-img
                wh(100%,100%)
                .play-pic
                    wh(100%,100%)
            .video-browses
                position absolute
                wh(500rpx, 200rpx)
                left 17%
                top 20%
                flex(space-between)
                .save-super
                    wh(200rpx, 150rpx)
                    text-align center
                    font-size 28rpx
                    color #ffffff
                    .save-browse
                        width 220rpx
                        border-radius 10rpx
                        hlh(72rpx)
                        font-size 30rpx
                        color #ffffff
                        background-color #1296db 
                    .super-browse
                        width 220rpx
                        border-radius 10rpx
                        hlh(72rpx)
                        font-size 30rpx
                        color #ffffff
                        border 0.5rpx solid #fff
            .showToast
                position absolute
                top 80%
                left 17%
                font-size 28rpx
                color #ffffff
                .buy
                    color #1296db

            .video-playing
                wh(100%, 100%)

</style>
