import {BrowserRouter, Switch, Route} from "react-router-dom";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import Navbar from "./componentes/Navbar";
import React from "react";

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/orders" component={Orders} />
                <Route path="*" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
