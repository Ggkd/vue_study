<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>

    <ul>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
      <li>哈哈哈哈</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "components/content/navbar/NavBar"
  import TabControl from "components/content/tabControl/TabControl"

  import HomeSwiper from "./childComps/HomeSwiper"
  import RecommendView from "./childComps/RecommendView"
  import FeatureView from "./childComps/FeatureView"

  import {getHomeMultidata} from "network/home"

  export default {
    name: "Home",
    components: {
      TabControl,
      RecommendView,
      NavBar,
      HomeSwiper,
      FeatureView,
      TabControl
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        // console.log(res)
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
    font-weight: 700;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>
