import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Join from "../views/Chat/Join";
import Chat from "../views/Chat/Chat";
import PrivateRoute from "./PrivateRoute";
const Routes = ()=>{
    return(
        <section>
            <Switch>
                <PrivateRoute exact path="/chat/name=:name&room=:room" component={Chat}/>
                <Route exact path="/join" component={Join}/>
            </Switch>
        </section>
    )
}
export default Routes;