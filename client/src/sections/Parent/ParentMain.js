import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Approvals} from "./Approvals";
import {Team} from "./Team";
import {Missions} from "./Missions";
import {Rewards} from "./Rewards";
import {ParentNav} from "../../components/Nav";


export const ParentMain = () =>
    <Router>
        <div>
            <ParentNav/>
            <div>
                <Switch>
                    <Route exact path="/parent" component={Approvals}/>
                    <Route exact path="/parent/approvals" component={Approvals}/>
                    <Route exact path="/parent/team" component={Team}/>
                    <Route exact path="/parent/rewards" component={Rewards}/>
                    <Route exact path="/parent/missions" component={Missions}/>
                </Switch>
            </div>
        </div>
    </Router>;


