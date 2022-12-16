import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store( {
        state:{
            account:{no :"123456",password:"123456"},
            loginSuccess:0
        },
        mutations:{
            setLogin(state){
                state.loginSuccess=1;
            }
          
        },
        getters:{
            getAccount(state){
                return state.account
            },
            getLogin(state){
                return state.loginSuccess
            }
        }


})