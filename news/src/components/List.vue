<template lang="html">
  <div class="list has-header" ref="list">
      <ul class="newsList">
        <template v-for="(item,index) in items">
          <router-link :to="{
                  name:'detail',
                  params:{
                    id:item.id,
                    src:item.jump_url
                  },
            }" >
            <li>
              <div class="cover">
                <img :src="item.pic" alt="">
              </div>
              <div class="txt">
                <h3>{{item.title}}</h3>
                <span>{{item.publish_time}}</span>
                <p class="des">{{item.des}}...</p>
              </div>
            </li>
          </router-link>
        </template>
      </ul>
  </div>
</template>

<script>
export default {
  props:['items']
}
</script>

<style lang="less" scoped>
.list {
  .newsList {
    a:visited{
      .txt{
        color: #aaa;
        span {
          color: #aaa;
        }
      }
    }
    li{
      display: flex;
      padding: 14px;
      color: #111;
      box-sizing: border-box;
      .txt{
        flex-grow: 1;
        margin-left: 20px;
        h3{
          line-height: 20px;
          margin-bottom: 4px;
        }
        span{
          font-size: 12px;
          color: #999;
        }
        .des {
          font-size: 14px;
          line-height: 18px;
          margin-top: 6px;
        }
      }
      .cover {
        width: 100px;
        height: 90px;
        img {
          width: 100px;
          height: 90px;
        }
      }
    }
  }
}
</style>
