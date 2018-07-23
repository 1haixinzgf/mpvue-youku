<template>
    <div class="title">
        <slot name="img" v-if="isShowImg"/>
        <div class="title-content">{{title}}</div>
        <slot name="navigato"/>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        isShowImg: Boolean
    }
}
</script>

<style lang="stylus" scoped>

    .title
        wh(100%, 80rpx)
        .img
</style>

