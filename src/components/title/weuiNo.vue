<template>
    <div  class="weui-cell weui-cell_access" hover-class="weui-cell_active">
        <div class="weui-cell__bd font-text">{{titleText}}}</div>
        <div v-if="isShowTo" class="weui-cell__ft weui-cell__ft_in-access font-to" ></div>
    </div>
</template>

<script>
export default {
    props: {
        titleText: Boolean,
        isShowTo: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style lang="stylus" scoped>

    .font-text
        font-weight bold
        font-size 30rpx
    .font-to
        font-size 23rpx
</style>

