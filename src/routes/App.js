import React from "react";

import { BrowserRouter, Switch,  Route } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import Page404 from "../containers/Page404";
import Layout from "../components/Layout";
import Player from "../components/Player";

const App = ()=>{
    return (
        <BrowserRouter>
            <Layout >
                {

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/player/:id" component={Player} />
                        <Route path="*" component={Page404} />
                    </Switch>
                }
            </Layout>
        </BrowserRouter>
    )
}
export default App;