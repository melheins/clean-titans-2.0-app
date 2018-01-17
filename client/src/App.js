import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
<<<<<<< HEAD
import Nav from "./components/Nav";
=======
import ParentNav from "./components/Nav";

// App.js
>>>>>>> fbe4eab2ea832d32e01bc5dcae327d7e5904f66b
import Auth from './Auth/Auth.js';


const auth = new Auth();


class App extends Component {
    sign_user = () => {
        auth.login();
    };
    render() {
        return (
            <div>
                <h1>Welcome to Auth0 app</h1>

                <button onClick = {this.sign_user}>Click to sign in</button>
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
