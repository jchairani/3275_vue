import { createWebHashHistory, createRouter } from "vue-router";
import UserLogin from "../components/UserLogin";
import HelloWorld from "../components/HelloWorld";
import AdminFunctions from "../components/AdminFunctions";
import AdminReportGeneration from "../components/AdminReportGeneration";
import UserAssetManagement from "../components/UserAssetManagement";
import UserShoppingCart from "../components/UserShoppingCart";
import AdminFunctionsProduct from "../components/AdminFunctionsProduct";
import AdminFunctionsUser from "../components/AdminFunctionsUser";

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
    },
    {
        path: "/AdminFunctionsProduct",
        name: "AdminFunctionsProduct",
        component: AdminFunctionsProduct
    },
    {
        path: "/AdminFunctionsUser",
        name: "AdminFunctionsUser",
        component: AdminFunctionsUser
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
