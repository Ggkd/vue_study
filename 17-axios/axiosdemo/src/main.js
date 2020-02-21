import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import {request} from "./request"


Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
    render: h => h(App),
}).$mount('#app')


// axios.defaults.baseURL = "http://localhost/8080"   // 配置根路径
// axios.defaults.timeout = 5000    // 配置超时时间
// axios({
//   url: "http://www.baidu.com"
// }).then(res => {
//   console.log(res)
// })

// axios({
//     url: "/user/query",
//     method: "get",
//     params: {
//       userid: "12345678"
//     }
//   }).then(res => {
//     console.log(res)
//   })

// 并发的发送请求http://localhost:8080/bill/billInfo?userid=zhangsan
// axios.all([
//     axios({
//         url: "/user/query",
//         method: "get",
//         params: {
//             userid: "12345678"
//         }
//     }),
//     axios({
//         url: "/bill/billInfo",
//         method: "get",
//         params: {
//             userid: "12345678"
//         }
//     }),
// ]).then(axios.spread((res1, res2) => {
//     console.log(res1)
//     console.log(res2)
// }))


request({
  url: "/user/query",
  params: {
            userid: "12345678"
        }
}).then(res => {
  consolo.log(res)
}).catch(err => {
  consolo.log(err)
})