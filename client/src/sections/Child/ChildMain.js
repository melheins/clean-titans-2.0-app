import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {CMissions} from "./CMissions";
import {CRewards} from "./CRewards";
import {ChildNav} from "../../components/Nav";


export const ChildMain = () =>
    <Router>
        <div>
            <ChildNav/>
            <div>
                <Switch>
                    <Route exact path="/child" component={CMissions}/>
                    <Route exact path="/child/missions" component={CMissions}/>
                    <Route exact path="/child/rewards" component={CRewards}/>
                </Switch>
            </div>
        </div>
    </Router>;



