<template>
  <div class="video">
    <scroll-view scroll-x="true" class="video-box">
      <div class="video-list">
        <div class="video-item "  v-for="(item,index) in aroundVideo" :key="index" @click="chooseTitle(index)">
          <div class="video-img">
            <img :src="aroundImg" alt="" class="video-pic">
          </div>
          <div class="video-desc">
            <span>{{aroundDesc}}</span>
          </div>
        </div>   
      </div>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      aroundVideo: [
        {
          aroundImg: '../../../static/images/swiper3.jpg',
          aroundDesc: 'plsql连接oracle，编码都设置好了，数据查询出来也是正常的中文，为什么单独注释是乱码？',
        },
        {
          aroundImg: '../../../static/images/swiper3.jpg',
          aroundDesc: 'plsql连接oracle，编码都设置好了，数据查询出来也是正常的中文，为什么单独注释是乱码？',
        },
        {
          aroundImg: '../../../static/images/swiper3.jpg',
          aroundDesc: 'plsql连接oracle，编码都设置好了，数据查询出来也是正常的中文，为什么单独注释是乱码？',
        },
        {
          aroundImg: '../../../static/images/swiper3.jpg',
          aroundDesc: 'plsql连接oracle，编码都设置好了，数据查询出来也是正常的中文，为什么单独注释是乱码？',
        },
        {
          aroundImg: '../../../static/images/swiper3.jpg',
          aroundDesc: 'plsql连接oracle，编码都设置好了，数据查询出来也是正常的中文，为什么单独注释是乱码？',
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import  '../../common/style/mixin'

</style>

