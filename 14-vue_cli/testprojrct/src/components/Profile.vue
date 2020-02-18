<template>
    <div>
        <h2>个人档案</h2>
        <h4>name:{{$route.query.name}}</h4>
        <h4>age:{{$route.query.age}}</h4>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>