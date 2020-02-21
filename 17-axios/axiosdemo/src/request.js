import Vue from 'vue'
import axios from "axios"

Vue.prototype.$axios = axios

export function request(config){
    // axios实例
   const instance = axios.create({
        baseURL : "http://localhost:8080",   // 配置根路径
        timeout : 5000    // 配置超时时间
    })

    // 发送真正的网络请求
    return instance(config)

}