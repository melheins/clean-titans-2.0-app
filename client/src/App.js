import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
//import ParentNav from "./components/Nav";
import { ParentNav, ChildNav } from "./components/Nav";
//import ParentNav from "./components/Nav";
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
        <div>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/parent">
                    <ParentNav/>
                </Route>
                <Route exact path="/child">
                    <ChildNav/>
                </Route>
            </Switch>
        </div>
    </Router>;


/** const App = () =>
 <Router>
 <div>
 <Nav />
 <Switch>
 <Route exact path="/" component={Books} />
 <Route exact path="/books" component={Books} />
 <Route exact path="/books/:id" component={Detail} />
 <Route component={NoMatch} />
 </Switch>
 </div>
 </Router>;  **/

export default App;
