import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {ParentMain} from "./sections/Parent";
import {CMissions, CRewards} from "./sections/Child";

import Auth from './Auth/Auth.js';


const auth = new Auth();


class Login extends React.Component {
    sign_user = () => {
        auth.login();
    };

    render() {
        return (
            <div>
                <h1>Welcome to Auth0 app</h1>

                <button onClick={this.sign_user}>Click to sign in</button>
            </div>
        );
    }
}

const App = () =>
    <Router>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/parent" component={ParentMain}/>
            <Route path="/child" component={CMissions}/>
            <Route exact path="/child/missions" component={CMissions}/>
            <Route exact path="/child/rewards" component={CRewards}/>
        </Switch>
    </Router>;


export default App;
