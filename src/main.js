import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;

//过滤器（用来过滤图片接口的字段）
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
});

//better-scroll全局组件
import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller);

//更新过渡动画组件
import  Loading from  '@/components/Loading'
Vue.component('Loading',Loading);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
