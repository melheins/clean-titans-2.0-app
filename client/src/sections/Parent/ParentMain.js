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

        let userInfo = jwtDecode(token);
        let userId = userInfo.sub;
        console.log(userInfo);
        console.log(userId);

        let pid = 0;

        API.loadParentAccount(userId)
            .then(function (res) {
                console.log("load res: " + JSON.stringify(res))
                if (!res.data) {
                    let newParent = {
                        first_name: userInfo.data.nickname,
                        last_name: userInfo.data.nickname,
                        uid: userInfo.data.id
                    };
                    console.log(newParent);
                    API.createNewUser(newParent);
                    .then(function(res) {console.log("New User: " + res)});
                }

                    console.log('Res Data ' + res.data);
                    pid = userId;
                    console.log('Parent Id: ' + pid);
                    localStorage.setItem('parentId',pid);
                    console.log('Local - Parent Id: ' + localStorage.getItem('parentId'));
                }
            )
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