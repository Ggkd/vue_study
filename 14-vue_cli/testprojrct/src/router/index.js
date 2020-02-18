import VueRouter from "vue-router"
import Vue from "vue"
// import Home from "../components/Home"
// import About from "../components/About"
// import User from "../components/User"

// 1.通过vue.use安装路由插件
Vue.use(VueRouter);

// 2.创建vueRouter实例对象
const Home = () => import("../components/Home");        // 懒加载
const About = () => import("../components/About");
const User = () => import("../components/User");

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home,
        children: [
            {
              path: "",
              redirect: "news"
            },
            {
                path: "news",
                component: () => import("../components/HomeNews")
            },
            {
                path: "message",
                component: () => import("../components/HomeMessage")
            }
        ]
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/user/:userId",
        component: User
    },
    {
        path: "/profile",
        component: () => import("../components/Profile")
    }
];

const router = new VueRouter({
    routes,
    mode: "history",
    linkActiveClass: "active"
});

// 3.将router导出
export default router