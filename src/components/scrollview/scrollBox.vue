<template>
    <scroll-view scroll-x="true" class="box">
        <div class="boxlist">
            <div class="box-item " :class="{'active': changeNav == index+1}"
                v-for="(item,index) in navs" :key="index" :data-nav="item" @click="chooseTitle">
                {{item+1}}
            </div>   
        </div>
    </scroll-view>
</template>

<script>
export default {
    data() {
        return {
            changeNav: 1,
            navs: 22
        }
    },
    methods: {
        chooseTitle() {

        }
    }
}
</script>

<style lang="stylus" scoped>
@import  '../../common/style/mixin'
  .box
    wh(750rpx, 100rpx)
    margin-left 20rpx
    .boxlist
      height 80rpx
      white-space nowrap
      .box-item
        margin-right 20rpx
        display inline-block
        text-align center
        width 80rpx
        hlh(80rpx)
        background-color #e6e6e6
        font-size 20rpx
      .active
        color #1296db
</style>
