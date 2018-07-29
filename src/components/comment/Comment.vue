<template>
<div>
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
      <span class="comment-content">{{comment.commentContent}}</span>
    </div>
    <div class="other-comment">
      <div class="one-comment" v-for="item in comment.otherComment" :key="item.index">
          <span class="other-username">{{item.username}}:&nbsp;&nbsp; </span>
          <span class="other-content">{{item.content}}</span>
      </div>
      <div class="see-comment">
        <span>查看全部{{comment.otherCommentNum}}条回复></span>
      </div>
    </div>
  </div>
</template>

<script>
import userInfo from '@/components/userInfo/userInfo'
import Laud from '@/components/laud/Laud'
export default {
  props: {
    comment: Object
  },
  // data () {
  //   return {
  //     comment:
  //     {
  //       id: 3,
  //       commentContent: '这是第一条热评，这是第一条热评，这是第一条热评，这是第一条热评，这是第一条热评，这是第一条热评，',
  //       otherComment: [{
  //         username: '微信用户124215624876',
  //         content: '可以自己来改造啊'
  //       },{
  //         username: '微信用户124215624876',
  //         content: '可以自己来改造啊'
  //       }],
  //       otherCommentNum: 20
  //     }
  //   }
  // },
  components: {
    userInfo,
    Laud
  }
}
</script>

<style lang="stylus" scoped>
@import  '../../common/style/mixin'
.play-comment
  flex(space-between)
  .userInfo
    margin-left 20rpx
.user-comment
  width 95%
  margin 0 auto
  line-height 1.3
  .comment-hot
    font-size 23rpx
    color red
    border 1rpx solid red
    wh(80rpx, 40rpx)
    .icon-comment
      display inline-block
  .comment-content
    font-size 30rpx
    word-wrap wrap
    color #282828
    padding-left 20rpx
.other-comment
  margin-top 20rpx
  margin-left 20rpx
  margin-right 20rpx
  line-height 2.2
  background-color #f1f1f1
  padding 15rpx 20rpx 15rpx 20rpx
  color #bfbfbf
  font-size 22rpx
  .other-content
    color #515151
    

    


</style>
