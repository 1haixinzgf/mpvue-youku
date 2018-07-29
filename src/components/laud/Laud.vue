<template>
  <div class="lauds">
    <div class="upLaud" :class="{'active': isAddLaud}" @click="addLaud()">
      <i class="iconfont icon-upload"></i>
      <span>{{upLauds}}</span>
    </div>
    <div class="downLaud" :class="{'active': isSubLaud}" @click="subLaud()">
      <i class="iconfont icon-download"></i>
      <span>{{downLauds}}</span>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    isAddLaud(val,oldVal) {
      if(val) this.upLauds++;
      else this.upLauds--;
    },
    isSubLaud(val,oldVal) {
      if(val) this.downLauds++;
      else this.downLauds--;
    }
  },
  data () {
    return {
      upLauds: 1235,
      downLauds: 200,
      isAddLaud: false,
      isSubLaud: false
    }
  },
  methods: {
    addLaud () {
      this.isAddLaud = true;
      this.isSubLaud = false;
    },
    subLaud() {
      this.isAddLaud = false;
      this.isSubLaud = true;
    }
  }
}

</script>

<style lang="stylus" scoped>
@import  '../../common/style/mixin'
.lauds
  flex(space-around)
  wh(300rpx, 60rpx)
  text-align center
  color #87877f
  font-size 25rpx
  .active
    color #d81e06
</style>

