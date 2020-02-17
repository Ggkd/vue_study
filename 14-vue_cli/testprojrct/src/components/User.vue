<template>
    <div>
        <h3>用户</h3>
        <span>用户信息</span>
        {{userId}}
        {{$route.params.userId}}
    </div>
</template>

<script>
    export default {
        name: "User",
        computed: {
            userId() {
                return this.$route.params.userId
            }
        }
    }
</script>

<style scoped>

</style>