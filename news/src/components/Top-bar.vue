<template lang="html">
  <div class="">
    <div class="top-bar">
      <slot name="iBack"><i class="iconfont icon-fanhui1" @click="closeTalion"></i></slot>
      <h2><slot name="page_title">设置</slot></h2>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    closeTalion(){
      this.$emit('closeTalion');
    },
  },
}
</script>

<style lang="less" scoped>
.top-bar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 46px;
    line-height: 46px;
    background-color: #eb3f2f;
    position: relative;
    color: #fff;
    h2{
      text-align: center;
      font-size: 20px;
    }
    i{
      position: absolute;
      width: 22px;
      height: 22px;
      font-size: 22px;
      left: 10px;
      top: 0px;
    }
  }
</style>
