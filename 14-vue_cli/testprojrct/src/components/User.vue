<template>
    <div>
        <h3>用户</h3>
        <span>用户信息</span>
        {{userId}}
        {{$route.params.userId}}

        <button @click="btn">router和route</button>
    </div>
</template>

<script>
    export default {
        name: "User",
        computed: {
            userId() {
                return this.$route.params.userId
            }
        },
        methods: {
            btn(){
                console.log(this.$router)
                console.log(this.$route)
            }
        },
        created() {
            console.log("user created");
        },
        destroyed() {
            console.log("user destroyed");
        },
    }
</script>

<style scoped>

</style>