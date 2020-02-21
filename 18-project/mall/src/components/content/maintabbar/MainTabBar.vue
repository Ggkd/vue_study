<template>
    <tab-bar>
        <tab-bar-item path="/home" active-class="red">
            <img src="~assets/img/tabbar/home.svg" slot="item-icon">
            <img src="~assets/img/tabbar/home_active.svg" slot="item-icon-active">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" active-class="blue">
            <img src="~assets/img/tabbar/category.svg" slot="item-icon">
            <img src="~assets/img/tabbar/category_active.svg" slot="item-icon-active">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" active-class="green">
            <img src="~assets/img/tabbar/cart.svg" slot="item-icon">
            <img src="~/assets/img/tabbar/cart_active.svg" slot="item-icon-active">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" active-class="pink">
            <img src="~assets/img/tabbar/profile.svg" slot="item-icon">
            <img src="~assets/img/tabbar/profile_active.svg" slot="item-icon-active">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "../../common/tabbar/TabBar"
    import TabBarItem from "../../common/tabbar/TabBarItem"

    export default {
        name: "MainTabBar",
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>
