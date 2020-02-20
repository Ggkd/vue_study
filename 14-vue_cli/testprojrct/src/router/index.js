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
        meta: "首页",
        children: [
            // {
            //   path: "",
            //   redirect: "news"
            // },
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
        component: About,
        meta: "关于",
        // beforeEnter: (to, from, next) => {
        //     console.log("about---before")
        //     next()
        // }
    },
    {
        path: "/user/:userId",
        component: User,
        meta: "用户"
    },
    {
        path: "/profile",
        component: () => import("../components/Profile"),
        meta: "档案"
    }
];

const router = new VueRouter({
    routes,
    mode: "history",
    linkActiveClass: "active"
});

// 前置守卫(guard)
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta
    // console.log(to)
    // console.log("before")
    next()
});

// 后置钩子(hook)
router.afterEach((to, from) => {
    // console.log("after")
});

// 3.将router导出
export default router