import Vue from "vue"
import Vuex from "vuex"
import {INCREMENT} from "./mutations-types";


Vue.use(Vuex);

const moduleA = {
    state: {
        name : "路飞"
    },
    mutations: {
        updateName(state){
            state.name = "索隆"
        }
    },
    getters: {
        fullName(state){
            return "蒙奇 D "+ state.name
        },
        fullName2(state, getters){
            return getters.fullName+ "海贼王"
        },
        fullName3(state, getters, rootState){
            return getters.fullName+ "海贼王"+rootState.counter
        }
    },
    actions: {
        aUpdateName(context){
            setTimeout(()=> {
                context.commit("updateName")
            },1000)
        }
    }
}

const store = new Vuex.Store({
    state:{
        counter: 10,
        user: [
            {"name":"路飞", "age": 18},
            {"name":"索隆", "age": 22},
            {"name":"娜美", "age": 20}
        ],
        info: {"name":"路飞", "age": 18}
    },
    mutations: {
        [INCREMENT](state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        // addCount(state,count){
        //     state.counter += count
        // },
        addCount(state,payload){
            state.counter += payload.count
        },
        addUser(state, user){
            state.user.push(user)
        },
        updateInfo(state){
            state.info.name = "索隆"
            // state.info["height"] = 188      // 不会响应式
            // Vue.set(state.info, "height", 188)
            // delete state.info.name        // 不会响应式
            // Vue.delete(state.info, "name")
        }
    },
    getters:{
        more20Age(state){
            return state.user.filter(s => s.age > 20)
        },
        more20AgeLength(state, getters){
            return getters.more20Age.length
        },
        moreAge(state){
            return age => {
                return state.user.filter(s => s.age > age)
            }
        }
    },
    actions: {
        aUpdateInfo(context, payload){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit("updateInfo")
                    console.log(payload);
                    resolve("里面已完成")
                },1000)
            })
        }
    },
    modules:{
        a: moduleA
    }
});

export default store