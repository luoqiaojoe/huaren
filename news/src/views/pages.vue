<template lang="html">
  <div class="">
    <header-bar @openTalion="open"></header-bar>
    <keep-alive>
      <list :items = "list[kind]"></list>
    </keep-alive>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
    <transition name="talion_fade">
      <talion v-show="talion" @closeTalion="close" @simplified="simplified" @traditional="traditional"></talion>
    </transition>
  </div>
</template>

<script>
  import { mapState,mapMutations,mapActions} from 'vuex'
  import axios from 'axios'

  import InfiniteLoading from 'vue-infinite-loading'

  import HeaderBar from '../components/Header-bar.vue'
  import Talion from '../views/Talion.vue'
  import List from '../components/List.vue'

  export default {
    data(){
      return {
        talion:false,
        kind:this.$route.params.type
      }
    },
    computed:{
      ...mapState(
        [
          'list'
        ]
      )
    },
    methods:{
      open(){
        this.talion = true;
      },
      close(){
        this.talion = false;
      },
      changeKind(){
        this.kind = this.$route.params.type;
      },
      ...mapMutations(['changeToFan','changeToJian']),
      ...mapActions(['getNews','loadMore']),
      onInfinite(){
        setTimeout( ()=>{
            this.loadMore({
              kind:this.kind
            })
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        },1000);
      },
      handleScroll() {
          window.document.body.scrollTop = 0;
      },
      simplified(){
        this.talion = false;
        // this.$store.state.lang = 'jian';
        this.changeToJian();
        this.getNews({
          kind:this.kind
        });
        this.$router.go(0)
      },
      traditional(){
        this.talion = false;
        // this.$store.state.lang = 'jian';
        this.changeToFan();
        this.getNews({
          kind:this.kind
        });
        this.$router.go(0)
      }
    },
    watch:{
      '$route':function(){
        this.changeKind();
        this.getNews({
          kind:this.kind
        });
        this.handleScroll();
      }
    },
    created(){
      this.getNews({
        kind:this.kind
      })
    },
    components:{
      HeaderBar,
      Talion,
      List,
      InfiniteLoading
    }
  }
</script>

<style lang="less" scoped>
  .talion_fade-enter-active, .talion_fade-leave-active {
    transition: all .3s
  }
  .talion_fade-enter, .talion_fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateX(100%);
  }
</style>
