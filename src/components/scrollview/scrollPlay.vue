<template>
    <scroll-view scroll-x="true" class="header-nav"  >
        <div class="nav-list">
            <div class="nav-item active" :class="{'active': changeNav == index}"
                v-for="(item,index) in navs" :key="index" :data-nav="index" @click="chooseTitle">
                {{item}}
            </div>   
        </div>
    </scroll-view>
</template>

<script>
export default {
    data() {
        return {
            changeNav: 1,
            navs: ["精选","世界杯","夜现场","看点","剧集","综艺","少儿","电影","直播",
            "精选","世界杯","夜现场","看点","剧集","综艺","少儿","电影","直播"]
        }
    },
    methods: {
        chooseTitle() {

        }
    }
}
</script>

<style lang="stylus" scoped>
  .header-nav 
    width 600rpx
    height 80rpx
    color red
    overflow scroll
    .nav-list
        width auto
        height 80rpx
        white-space nowrap
        .nav-item
            text-align center
            line-height 80rpx
            color #ffffff
            font-size 30rpx
            margin-right 20rpx
            width 100rpx
            height 80rpx
            display inline-block
        .active
            font-size 40px
            font-weight bold
            color yellow
</style>
