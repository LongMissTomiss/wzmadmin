//统一管理路由
import Home from "../views/Home"
import Login from "../views/Login"
import Pages from '../views/Pages'
import News from '../views/Pages/News'
import Users from '../views/Pages/Users'

const routersList = [
    {
        path: "/home",
        component: Home,
        exact: true
    },
    {
        path: "/login",
        component: Login,
        exact: true
    },
    {
        path: "/pages",
        component: Pages,
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
    }
]

export default routersList;