import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Approvals, Team, Missions, Rewards} from "./index.js";
import {ParentNav} from "../../components/Nav";
import {getIdToken, setIdToken} from '../../Auth/Auth';
import jwtDecode from "jwt-decode";
//import ChildLogin from "../Login/ChildLogin";
import API from "../../utils/API";

export class ParentMain extends React.Component {

    componentDidMount() {

        // Set a unique jwt from Auth0, then decode it for use of data
        setIdToken();

        let token = localStorage.getItem('id_token');

        let decoded = jwtDecode(token);
        let userId = decoded.sub;
        console.log(decoded);
        console.log(userId);

        let pid = 0;

        API.loadParentAccount(userId)
            .then(function (res) {
                    console.log('Res Data ' + res.data);
                    pid = res.data.id;
                    console.log('Parent Id: ' + pid);
                    localStorage.setItem('parentId',pid);
                    console.log('Local - Parent Id: ' + localStorage.getItem('parentId'));
                }
            )
            .then(function (res) {
                if (res.data.id === 0) {
                    API.createNewUser(userId)
                }
            })
            .catch(err => console.log(err));


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
                        </Switch>
                    </div>
                </div>
            </Router>

        )
    }
}