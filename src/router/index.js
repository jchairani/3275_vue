import { createWebHashHistory, createRouter } from "vue-router";
import UserLogin from "../components/UserLogin";
import HelloWorld from "../components/HelloWorld";
import AdminFunctions from "../components/AdminFunctions";
import AdminReportGeneration from "../components/AdminReportGeneration";
import UserAssetManagement from "../components/UserAssetManagement";
import UserShoppingCart from "../components/UserShoppingCart";
import AdminFunctionsProduct from "../components/AdminFunctionsProduct";
import AdminFunctionsUser from "../components/AdminFunctionsUser";
import AdminFunctionsProductAdd from "../components/AdminFunctionsProductAdd";
import AdminFunctionsProductMod from "../components/AdminFunctionsProductMod";
import AdminFunctionsUserAdd from "../components/AdminFunctionsUserAdd";
import AdminFunctionsUserMod from "../components/AdminFunctionsUserMod";
import UserRegistration from "../components/UserRegistration";

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
    {
        path: "/AdminFunctionsUserAdd",
        name: "AdminFunctionsUserAdd",
        component: AdminFunctionsUserAdd
    },
    {
        path: "/AdminFunctionsUserMod",
        name: "AdminFunctionsUserMod",
        component: AdminFunctionsUserMod
    },
    {
        path: "/AdminFunctionsProductAdd",
        name: "AdminFunctionsProductAdd",
        component: AdminFunctionsProductAdd
    },
    {
        path: "/AdminFunctionsProductMod",
        name: "AdminFunctionsProductMod",
        component: AdminFunctionsProductMod
    },
    {
        path: "/UserRegistration",
        name: "UserRegistration",
        component: UserRegistration
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;
