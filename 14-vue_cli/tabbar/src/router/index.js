import Vue from "vue"
import VueRouter from "vue-router"

// 1.安装插件
Vue.use(VueRouter)

// 2.创建实例

const Home = () => import("../view/home/Home");
const Category = () => import("../view/category/Category");
const Cart = () => import("../view/cart/Cart");
const Profile = () => import("../view/profile/Profile");


const routes = [
    {
        path: "",
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/category",
        component: Category
    },
    {
        path: "/cart",
        component: Cart
    },
    {
        path: "/profile",
        component: Profile
    }
];

const router = new VueRouter({
        routes,
        mode: "history"
    }
);

export default router
