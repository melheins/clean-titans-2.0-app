import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {CMissions} from "./CMissions";
import {CRewards} from "./CRewards";
import ChildNav from "../../components/Nav/ChildNav";
//import API from "../../utils/API";


export class ChildMain extends React.Component {
    state = {
        //children: [],
        sampleChildren: [],
    };

    componentDidMount() {
        console.log('Child Main - Child Id: ' + localStorage.getItem('childId'));
        //const cid = localStorage.getItem('childId');
    }



    render() {
        return (
            <Router>
                <div>
                    <ChildNav/>
                    <div>
                        <Switch>
                            <Route exact path="/child" component={CMissions}/>
                            <Route exact path="/child/missions" component={CMissions}/>
                            <Route exact path="/child/rewards" component={CRewards}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );

    }
}