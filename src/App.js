import React from 'react'
import { BrowserRouter as Router,Switch} from "react-router-dom";
import routersList from './routers/routers'
import { renderRoutes } from "react-router-config";
import './App.less'
import Auth from './views/utils/auth'

const App = () => {
    return (
        <Router>
            <Switch>
                <Auth></Auth>
            </Switch>
        </Router>
    )
}

export default App;