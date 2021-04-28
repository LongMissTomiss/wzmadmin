import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import routersList from './routers/routers'
import { renderRoutes } from "react-router-config";

const App = () => {
    
    return (
        <Router>
            {
                renderRoutes(routersList)
            }
        </Router>
    )
}

export default App;