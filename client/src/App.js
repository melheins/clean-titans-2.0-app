import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import ParentNav from "./components/Nav";

// App.js
import Auth from './Auth/Auth.js';
const auth = new Auth();
auth.login();

class App extends Component {
    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <div>
                {/*<Navbar fluid>*/}
                    {/*<Navbar.Header>*/}
                        {/*<Navbar.Brand>*/}
                            {/*<a href="#">Auth0 - React</a>*/}
                        {/*</Navbar.Brand>*/}
                        {/*<Button*/}
                            {/*bsStyle="primary"*/}
                            {/*className="btn-margin"*/}
                            {/*onClick={this.goTo.bind(this, 'home')}*/}
                        {/*>*/}
                            {/*Home*/}
                        {/*</Button>*/}
                        {/*{*/}
                            {/*!isAuthenticated() && (*/}
                                {/*<Button*/}
                                    {/*bsStyle="primary"*/}
                                    {/*className="btn-margin"*/}
                                    {/*onClick={this.login.bind(this)}*/}
                                {/*>*/}
                                    {/*Log In*/}
                                {/*</Button>*/}
                            {/*)*/}
                        {/*}*/}
                        {/*{*/}
                            {/*isAuthenticated() && (*/}
                                {/*<Button*/}
                                    {/*bsStyle="primary"*/}
                                    {/*className="btn-margin"*/}
                                    {/*onClick={this.logout.bind(this)}*/}
                                {/*>*/}
                                    {/*Log Out*/}
                                {/*</Button>*/}
                            {/*)*/}
                        {/*}*/}
                    {/*</Navbar.Header>*/}
                {/*</Navbar>*/}
            </div>
        );
    }
}



// const App = () =>
//   <Router>
//     <div>
//       <Nav />
//       <Switch>
//         <Route exact path="/" component={Books} />
//         <Route exact path="/books" component={Books} />
//         <Route exact path="/books/:id" component={Detail} />
//         <Route component={NoMatch} />
//       </Switch>
//     </div>
//   </Router>;

export default App;
