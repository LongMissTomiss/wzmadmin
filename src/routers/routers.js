//统一管理路由
import Home from "../views/Home"
import Login from "../views/Login"
import Pages from '../views/Pages'
import News from '../views/Pages/News'
import Users from '../views/Pages/Users'
import NotFound from '../views/NotFound'
import { Redirect } from 'react-router'

const routersList = [
    {
        path: '/',
        exact: true,
        auth: false,
    },
    {
        path: "/home",
        component: Home,
        exact: true,
        auth:true
    },
    {
        path: "/login",
        component: Login,
        exact: true,
        auth:false,
    },
    {
        path: "/404",
        component: NotFound,
        auth:false
    },
    {
        path: "/pages",
        component: Pages,
        auth:true,
        routes: [
            {
                path: "/pages/news",
                component: News,
                exact: true
            },
             {
                path: "/pages/users",
                component: Users,
                exact: true
            }
        ]
    },
    {
        path: '*',
        component: () => <Redirect to="/404"/>
    }
]

export default routersList;