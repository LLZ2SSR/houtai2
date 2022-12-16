import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/global.css'
import axios from "axios";
import VueRouter from 'vue-router';
import router from './router';
import store from './store';
Vue.prototype.$axios =axios;
Vue.prototype.$httpUrl='https://mock.apifox.cn/m1/1984536-0-default';
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false;

router.beforeEach( function( to , from , next) {



  if( to.path !== '/'){

    if(store.state.loginSuccess!==1){
          

       

      next('/')
    }

                  

     }


     next();
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
