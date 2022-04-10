import { createWebHashHistory, createRouter } from "vue-router";
import UserLogin from "../components/UserLogin";
import HelloWorld from "../components/HelloWorld";
import AdminFunctions from "../components/AdminFunctions";
import AdminReportGeneration from "../components/AdminReportGeneration";
import UserAssetManagement from "../components/UserAssetManagement";
import UserShoppingCart from "../components/UserShoppingCart";

const routes = [
    {
        path: "/",
        name: "UserLogin",
        component: UserLogin
    },
    {
        path: "/helloworld",
        name: "HelloWorld",
        component: HelloWorld
    },
    {
        path: "/AdminFunctions",
        name: "AdminFunctions",
        component: AdminFunctions
    },
    {
        path: "/AdminReportGeneration",
        name: "AdminReportGeneration",
        component: AdminReportGeneration
    },
    {
        path: "/UserAssetManagement",
        name: "UserAssetManagement",
        component: UserAssetManagement
    },
    {
        path: "/UserShoppingCart",
        name: "UserShoppingCart",
        component: UserShoppingCart
    }

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
