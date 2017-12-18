<template lang="html">
  <div class="subpage">
    <top-bar>
      <i class="iconfont icon-fanhui1" @click="closeSub" slot="iBack"></i>
      <h2 slot="page_title">{{name}}</h2>
    </top-bar>

    <div class="about" v-if="name=='关于我们'">
      <h2 class="logo">
        <img src="../assets/img/logo.png" alt="">
        <p>华人头条 v 0.1.beta</p>
      </h2>
      <div class="text">
        华人头条是一款基于数据挖掘的推荐引擎产品，为全世界华人用户推荐有价值的、个性化的信息。
      </div>
    </div>

    <div class="help" v-if="name=='帮助与反馈'">
      <h3>请留下您的宝贵建议或意见：</h3>
      <form class="" action="javascript:;" method="post">
        <textarea name="name" rows="9"></textarea>
        <input type="submit" name="" value="提交">
      </form>
    </div>

  </div>
</template>

<script>
import TopBar from './Top-bar.vue'

export default {
  props:{
    "name":String
  },
  methods:{
    closeSub(){
      this.$emit('closeSub')
    }
  },
  components:{
    TopBar
  }
}
</script>

<style lang="less" scoped>
.subpage {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f1f1f1;
  .about {
    margin-top: 24px;
    h2.logo{
      text-align: center;
      img{
        width: 100px;
      }
      p{
        font-size: 16px;
        color: #ababab;
        margin-top: 12px;
      }
    }
    .text {
      width: 80%;
      font-size: 16px;
      color: #111;
      line-height: 24px;
      text-indent: 2em;
      margin: 20px auto 0;
    }
  }
  .help {
    width: 90%;
    margin: 28px auto 0;
    h3{
      color: #111;
      font-size: 18px;
      margin-bottom: 10px;
    }
    form{
      textarea {
        width: 100%;
        padding: 10px;
        resize: none;
        border: 1px solid #bbb;
        outline: none;
        box-sizing: border-box;
        font-size: 16px;
        border-radius: 4px;
      }
      input {
        width: 100%;
        height: 46px;
        color: #fff;
        font-size: 18px;
        background-color: #eb3f2f;
        border-radius: 5px;
        margin: 16px 0;
      }
    }
  }
}
</style>
