<template>
    <div>
        <h3>首页</h3>
        <span>红红火火恍恍惚惚</span>
        <div>
        <router-link to="/home/news">新闻  </router-link>

        <router-link to="/home/message">消息</router-link>
        <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return {
                path: "/home/news"
            }
        },
        created() {
            console.log("home created");
        },
        destroyed() {
            console.log("home destroyed");
        },

        // 这两个函数，只有在保持了状态 使用了keep-alive时，才有效
        activated() {
            console.log("activated");
            this.$router.push(this.path)
        },
        deactivated() {
            console.log("deactivated");
        },
        beforeRouteLeave(to, from, next) {
            console.log(this.$route.path);
            this.path = this.$route.path;
            next()
        }
    }
</script>

<style scoped>

</style>