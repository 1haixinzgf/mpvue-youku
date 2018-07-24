<template>
    <div class="weui-cell weui-cell_access" >
        <div class="weui-cell__bd font-text">{{titleText}}</div>
        <div v-if="isShowTo" class="weui-cell__ft weui-cell__ft_in-access font-to" >{{contentText}}</div>
        <slot name="hide"></slot>
    </div>
</template>

<script>
export default {
    props: {
        titleText: String,
        isShowTo: {
            type: Boolean,
            default: false
        },
        contentText: String
    }
}
</script>

<style lang="stylus" scoped>

    .font-text
        font-weight bold
        font-size 36rpx
    .font-to
        font-size 23rpx
         
</style>

