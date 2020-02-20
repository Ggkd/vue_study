<template>
  <div id="app">
    <div>moduleA -----------</div>
    <div>name:{{$store.state.a.name}}</div>
    <button @click="updateName">修改信息</button>
    <div>fullName:{{$store.getters.fullName}}</div>
    <div>fullName2:{{$store.getters.fullName2}}</div>
    <div>fullName3:{{$store.getters.fullName3}}</div>
    <button @click="aUpdateName">修改名字</button>


    <div>app -----------</div>
    <div>info:{{$store.state.info}}</div>
    <button @click="updateInfo">修改信息</button>

    <div>app counter:{{$store.state.counter}}</div>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addUser">添加用户</button>



    <div>{{$store.getters.more20Age}}</div>
    <div>{{$store.getters.more20AgeLength}}</div>
    <div>{{$store.getters.moreAge(18)}}</div>

    <div>hello -----------</div>
  <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {INCREMENT} from "../store/mutations-types";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    add(){
      this.$store.commit(INCREMENT)
    },
    sub(){
      this.$store.commit('decrement')
    },
    addCount(count){
      // 普通提交
      // this.$store.commit("addCount", count)
      // 特殊提交
      this.$store.commit({
        type: "addCount",
        count
      })
    },
    addUser(){
      const user = {"name":"山治", "age":23}
      this.$store.commit("addUser", user)
    },
    updateInfo(){
      // this.$store.commit("updateInfo")
      this.$store.dispatch("aUpdateInfo", "哈哈哈").then(res => {
        console.log("1111")
        console.log(res)
      })
    },
    updateName(){
      this.$store.commit("updateName")
    },
    aUpdateName(){
      this.$store.dispatch("aUpdateName")
    }
  }
}
</script>

<style>

</style>
