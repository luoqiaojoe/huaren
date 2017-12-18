import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'


Vue.use(Vuex)
import axios from 'axios'

const state = {
  page:0,
  lang: JSON.stringify( localStorage.getItem('lang') )|| 'fan',
  noMore:'',
  list:{
    war : [],
    sport : [],
    tech : [],
    edu : [],
    money : [],
    gupiao : [],
    travel : [],
    ent : [],
    lady : []
  }
}

export default new Vuex.Store({

  state,
  mutations,
  actions

})
