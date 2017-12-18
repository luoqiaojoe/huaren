export default {
  //将发送的请求数据添加到list各项中去，进行渲染页面
  getNewsList(state,payload){
      state.list[payload.kind] = state.list[payload.kind].concat(payload.data)
    // for (var item in payload.data) {
    //   state.list[payload.kind].push(payload.data[item]);
    // }

  },
  noMore(state,payload){
    state.noMore = payload.txt
  },
  changeToFan(state){
    let lang = JSON.stringify(localStorage.getItem('lang'));
    if( lang === 'fan' ){
      return false
    } else {
      // state.lang = JSON.stringify(localStorage.setItem('lang','fan'));
      localStorage.setItem('lang','fan')
      state.lang = 'fan';
    }
  },
  changeToJian(state){
    let lang = JSON.stringify(localStorage.getItem('lang'));
    if( lang === 'jian' ){
      return false
    } else {
      // state.lang = JSON.stringify(localStorage.setItem('lang','jian'));
      localStorage.setItem('lang','jian')
      state.lang = 'jian';
    }
  }
}
