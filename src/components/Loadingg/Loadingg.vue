<template>
    <div class="Loading">
        hhhh
    </div>
</template>

<script>
export default {
    props: {
        isLoading: Boolean
    },
    mounted () {

    }
}
</script>

<style lang="stylus" scoped>
@import  '../../common/style/mixin'
    .Loading
        wh(50rpx,50rpx)
        border-top 10rpx solid #1296db
        border-right 10rpx solid #1296db
        border-radius 50%
        animation isLoading 1s ease-in-out infinite
</style>
<style>
 @keyframes isLoading{
    0% {
        transform: rotate(0deg)
    }
    30% {
         transform: rotate(90deg)
    }
    80% {
        transform: rotate(270deg)
    }
    100% {
        transform: rotate(360deg)
    }
}

</style>

