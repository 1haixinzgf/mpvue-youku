<template>
    <div class="plays-container">
        <div class="play-item" v-for="item in plays" :key="item.id" data-id="item.id" @click="play(index)">
            <div>
                <div class="play-img">
                    <div class="play-img-title">
                        <img :src="item.imgUrl" alt="" class="play-img-pic">
                    </div>
                    <div class="play-img-sign" v-if="item.imgSign">
                        <i class="iconfont icon-vip"></i>
                    </div>
                    <div class="play-update">
                        <span>{{item.update}}</span>
                    </div>
                </div>
                <div class="play-content">
                    <div class="play-title">
                        <span>{{item.playTitle}}</span>
                    </div>
                    <div class="play-desc">
                        <div>
                            <span>{{item.playDesc}}</span>
                        </div>
                        <div class="play-desc-img" @click="deletePlay(index)">
                            <img src="../../../static/images/points.png" alt="" class="play-desc-pic">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data () {
        isNotFun: true
    },
    props : {
        plays: Array
    },
    methods: {
        deletePlay (index) {
            // console.log(index)
            this.$emit('deletePlay', index)
        },
        play(index) {
            const id = this.plays[index].id
            this.$emit('playTV', id)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import  '../../common/style/mixin'
    .plays-container
        width 100%
        overflow hidden

        .play-item
            float left
            wh(370rpx, 350rpx)
            margin-right 12rpx
            position relative
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
                    color #e16531
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
                width 350rpx
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

<style scoped>
.play-item:nth-child(2n) {
      margin-right: 0;
}
</style>

