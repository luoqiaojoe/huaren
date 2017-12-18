<template lang="html">
  <div class="detail">
    <div class="top-bar">
      <i class="iconfont icon-fanhui1" @click="back"></i>
      <h2>头条详情</h2>
    </div>
    <iframe ref="frame" :src="p_src"></iframe>
  </div>
</template>

<script>

export default {
  data(){
    return {
      p_src:this.$route.params.src,
    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    }
  },
  mounted(){
      let iframe = this.$refs.frame;
      iframe.height = iframe.contentWindow.frames.top.innerHeight;
      // console.log(iframe.contentWindow.frames.top.innerHeight);
  }
}
</script>

<style lang="less" scoped>
.detail{
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
  iframe{
    margin-top: -1px;
    width: 100%;
  }
}
</style>
