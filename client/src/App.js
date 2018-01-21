import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {ParentMain} from "./sections/Parent";
import {ChildMain} from "./sections/Child";
import Auth from './Auth/Auth.js';
import "./App.css"


const auth = new Auth();

class Login extends React.Component {
    sign_user = () => {
        auth.login();
    };

    render() {
        return (
            <div>
                <h1>Welcome Heroes!</h1>

                <button onClick={this.sign_user}>Click to sign in</button>
            </div>
        );
    }
}

const App = () =>
    <Router>
        <MuiThemeProvider>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/parent" component={ParentMain}/>
                <Route path="/child" component={ChildMain}/>
            </Switch>
        </MuiThemeProvider>
    </Router>;


export default App;
