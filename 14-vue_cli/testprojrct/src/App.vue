<template>
    <div id="app">
        <!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
        <!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->

        <!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
        <!--    <router-link to="/about" tag="button" replace>关于</router-link>-->


        <!--    <button @click="homeClick">首页</button>-->
        <!--    <button @click="aboutClick">关于</button>-->


        <router-link to="/home" tag="button" replace>首页</router-link>
        <router-link to="/about" tag="button" replace>关于</router-link>
<!--        <router-link :to="'/user/'+userId" tag="button" replace>用户</router-link>-->
<!--        <router-link :to="{path: '/profile', query: {name: 'luffy', age: 11}}" tag="button" replace>我的</router-link>-->
                <button @click="userClick">用户</button>
                <button @click="profileClick">我的</button>
        <router-view></router-view>

    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                userId: "luffy"
            }
        },
        methods: {
            homeClick() {
                // this.$router.push("/home")
                this.$router.replace("/home")
            },
            aboutClick() {
                // this.$router.push("/about")
                this.$router.replace("/about")
            },
            userClick() {
                this.$router.push("/user/" + this.userId)
            },
            profileClick() {
                this.$router.push({
                    path: "/profile",
                    query: {
                        name: "luffy",
                        age: 11
                    }
                })
            }
        }
    }
</script>

<style>
    /*.router-link-active {*/
    /*  color: red;*/
    /*}*/

    .active {
        color: red;
    }
</style>