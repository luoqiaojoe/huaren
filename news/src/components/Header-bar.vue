<template lang="html">
  <div class="header-fixed">
    <div class="header-bar">
      <h2>华人头条</h2>
      <i class="iconfont icon-shezhi" @click="openTalion"></i>
    </div>
    <ul class="tab">
      <li v-for="(item,index) in items" :class="{cur:item.type==route}" @click="setCur(index)">
        <router-link :to='item.type'>{{item.text}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      route:'',
      items:[
        {
          isCur:true,
          text:'军事',
          type:'war'
        },
        {
          isCur:false,
          text:'体育',
          type:'sport'
        },
        {
          isCur:false,
          text:'科技',
          type:'tech'
        },
        {
          isCur:false,
          text:'教育',
          type:'edu'
        },
        {
          isCur:false,
          text:'财经',
          type:'money'
        },
        {
          isCur:false,
          text:'股票',
          type:'gupiao'
        },
        {
          isCur:false,
          text:'旅游',
          type:'travel'
        },
        {
          isCur:false,
          text:'娱乐',
          type:'ent'
        },
        {
          isCur:false,
          text:'女人',
          type:'lady'
        },
      ]
    }
  },
  methods:{
    openTalion(){
      this.$emit('openTalion')
    },
    setCur(index){
      this.items.map( (v,i) => {
        i == index ? v.isCur = true : v.isCur = false
      });
    },
    routeChange(){
      this.route = this.$route.path.substring(7);
    }
  },
  watch:{
    "$route": "routeChange"
  },
  created(){
    this.route = this.$route.path.slice(7)
  }
}
</script>

<style lang="less" scoped>
.header-fixed{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  .header-bar{
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
      right: 10px;
      top: 0px;
    }
  }
  .tab {
    height: 38px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f6f6f6;
    li{
      a{
        font-size: 16px;
        color: #111;
      }
      &.cur{
        a{
          color: #eb3f2f;
        }
      }
    }
  }
}
</style>
