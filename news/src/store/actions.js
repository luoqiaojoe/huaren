import axios from 'axios'

export default {
  getNews({commit,state},payload){

    // let url = 'http://wangyi.butterfly.mopaasapp.com/news/api?type='+
    // payload.kind +'&page='+ state.page +'&limit=10' + 'lang=' + state.lang;
    let url = 'api/v0/article/list?page='+ state.page +
    '&pagesize=10&type='+ payload.kind +'&lang=' + state.lang;
    axios.get( url ).then( res =>{
      commit('getNewsList', {
          data: res.data.data.list,
          kind: payload.kind
      });
      console.log(res)
    })
  },
  loadMore({commit,state},payload){
    state.page+=1;
    // let url = 'http://wangyi.butterfly.mopaasapp.com/news/api?type='+
    // payload.kind +'&page='+ state.page +'&limit=10' + '&lang=' + state.lang;
    let url = 'api/v0/article/list?page='+ state.page +
    '&pagesize=10&type='+ payload.kind +'&lang=' + state.lang;
    axios.get( url ).then( res =>{
      if(res){
        commit('getNewsList', {
            data: res.data.data.list,
            kind: payload.kind
        });
      } else {
        commit('noMore', {
            txt:'没有更多了 :('
        });
      }
    })
  }
}
