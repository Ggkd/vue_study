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
        name: "Home"
    }
</script>

<style scoped>

</style>