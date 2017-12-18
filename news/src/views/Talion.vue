<template lang="html">
  <div class="talion">
    <top-bar @closeTalion="closeTalion"></top-bar>
    <ul class="menu">
      <li v-for="list in lists" @click="subpage=list.txt">
        <span>{{list.txt}}</span>
        <i class="iconfont icon-fanhui1 right"></i>
      </li>
      <li class="changeLang"  @click="btmMenu=!btmMenu">
        <span>切换简/繁体</span>
      </li>
    </ul>
    <transition name="mask">
      <div class="mask" v-show="btmMenu" @click="btmMenu=!btmMenu"></div>
    </transition>

    <transition name="subpage">
      <sub-page v-show="subpage" :name="subpage" @closeSub="closeSub"></sub-page>
    </transition>

    <transition name="btmMenu">
      <btm-menu v-show="btmMenu"
        @closeBtmMenu="btmMenu=!btmMenu"
        @traditional='traditional'
        @simplified='simplified'
      ></btm-menu>
    </transition>
  </div>
</template>

<script>
import BtmMenu from '../components/BtmMenu.vue'
import TopBar from '../components/Top-bar.vue'
import SubPage from '../components/Subpage.vue'

export default {
  data(){
    return {
      btmMenu:false,
      subpage:'',
      lists:[
        {
          txt:'关于我们'
        },
        {
          txt:'帮助与反馈'
        }
      ]
    }
  },
  methods:{
    closeTalion(){
      this.$emit('closeTalion');
    },
    closeSub(){
      this.subpage = '';
    },
    simplified(){
      this.$emit('simplified')
      this.btmMenu=!this.btmMenu
    },
    traditional(){
      this.$emit('traditional')
      this.btmMenu=!this.btmMenu
    },
  },
  components:{
    BtmMenu,
    TopBar,
    SubPage
  }
}
</script>

<style lang="less" scoped>
.btmMenu-enter-active, .btmMenu-leave-active {
  transition: all .3s
}
.btmMenu-enter, .btmMenu-leave-to /* .fade-leave-active in <2.1.8 */ {
  transform: translateY(100%);
}

.subpage-enter-active, .subpage-leave-active {
  transition: all .2s
}
.subpage-enter, .subpage-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
}

.mask-enter-active, .mask-leave-active {
  transition: all .3s
}
.mask-enter, .mask-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.talion{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f1f1f1;
  z-index: 999;
  .top-bar{
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
  .menu {
    margin-top: 10px;
    li{
      padding: 14px;
      display: flex;
      background-color: #fff;
      font-size: 16px;
      color: #111;
      border-bottom: 1px solid #eee;
      &.changeLang{
        text-align: center;
        margin-top: 12px;
      }
      span {
        flex-grow: 1;
      }
      i.right{
        font-size: 16px;
        color: #bbb;
        transform: rotate(180deg);
      }

    }
  }
  .mask{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
  }
}
</style>
