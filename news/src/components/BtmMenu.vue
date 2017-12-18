<template lang="html">
  <div class="container">
    <ul class="btmMenu">
      <li @click="simplified">简体中文</li>
      <li @click="traditional">繁体中文</li>
      <li class="cancel" @click="closeBtmMenu">取消</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods:{
    closeBtmMenu(){
      this.$emit('closeBtmMenu')
    },
    simplified(){
      this.$emit('simplified')
    },
    traditional(){
      this.$emit('traditional')
    },
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;

  .btmMenu {
    background-color: #f1f1f1;
    li{
      padding: 14px;
      background-color: #fff;
      font-size: 16px;
      color: #111;
      text-align: center;
      border-bottom: 1px solid #eee;
      &.cancel {
        margin-top: 10px;
      }
    }
  }
}
</style>
