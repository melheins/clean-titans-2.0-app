import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {ParentMain} from "./sections/Parent";
import {ChildMain} from "./sections/Child";
import ChildLogin from "./sections/Login/ChildLogin"
import { login } from './Auth/Auth.js';
import "./App.css"


// const auth = new Auth();


class Login extends React.Component {
    sign_user = () => {
        login();
    };

    render() {
        return (
            <div className={"row"} style={{textAlign:'center',marginTop: '200px'}}>
                <div className={"col-lg-3 col-md-2 col-sm-1"}>

                </div>
                <div className={"col-lg-6 col-md-8 col-sm-10"}>
                    <h1>Welcome Heroes!</h1>
                    <FlatButton backgroundColor="red" style={{textAlign:'center',height:'100%',padding: '15px',backgroundColor:'red',fontWeight:'bold', fontFamily: "Comic Geek"}} onClick={this.sign_user}>Click to Sign In!</FlatButton>
                </div>
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
                <Route exact path="/childlogin" component={ChildLogin}/>
            </Switch>
        </MuiThemeProvider>
    </Router>;


export default App;