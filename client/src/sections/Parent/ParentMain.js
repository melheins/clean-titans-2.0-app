import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Approvals} from "./Approvals";
import {Team} from "./Team";
import Missions from "./Missions";
import {Rewards} from "./Rewards";
import {ParentNav} from "../../components/Nav";
import {getIdToken, setIdToken} from '../../Auth/Auth';
import jwtDecode from "jwt-decode";
import {ChildLogin} from "../Login/ChildLogin";

export class ParentMain extends React.Component {

    state = {
        pid: 0
    };

    componentDidMount() {

        // Set a unique jwt from Auth0, then decode it for use of data
        setIdToken();

        let token = localStorage.getItem('id_token');

        let decoded = jwtDecode(token);
        console.log(decoded);

        getIdToken();

        // console.log(token);
    }

    render() {
        return (
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
                            <Route exact path="/childlogin" component={ChildLogin}/>
                        </Switch>
                    </div>
                </div>
            </Router>

        )
    }
}

