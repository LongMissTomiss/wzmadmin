import { Redirect, Route } from "react-router-dom";
import routersList from '../../routers/routers'

const Auth = (props) => {
    console.log(props,"9987");
    let pathname = props.location.pathname;
    let routeritem = routersList.find((item, i) => (pathname.search(item.path)!=="-1"));
    if (pathname==="/") {//项目首页
        return <Redirect to="/login" />
    }
    if (!routeritem) {//非法路由
        return <Redirect to="/404" />
    } else {//合法路由
        let isLogin = JSON.parse(window.localStorage.getItem("loginstatus"));
        if (isLogin) { //有登录状态
            if (pathname === "/login") {
                return <Redirect to="/home" />
            } else {
                return <Route to={pathname} component={routeritem.component} />
            }
        } else {
            if (routeritem.auth) { //有权限的路由
            return <Redirect to="/login" />
        } else {//没有权限的路由
            return (
                <Route to={pathname} component={routeritem.component} />
            )
        }
        }

       
    }
}



export default Auth;