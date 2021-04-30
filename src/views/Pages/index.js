import React from 'react'
import { Link, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const Pages = ( props) => {
    console.log(props,"Pages");
    const style1 = {
        display: "block",
        textDecoration: 'none'
    }
    return (
        <div>
            <Link to="/pages/news" style={style1} >news</Link>
            <Link to="/pages/users" style={style1} >uers</Link>
            <Switch>
                {
                   
                }
            </Switch>
        </div>
    )
}

export default Pages;