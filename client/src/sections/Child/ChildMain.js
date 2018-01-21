import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {CMissions} from "./CMissions";
import {CRewards} from "./CRewards";
import {ChildNav} from "../../components/Nav";
import API from "../../utils/API";


export class ChildMain extends React.Component {
    state = {
        children: [],
        sampleChildren: [],
    };

    componentDidMount() {
        const cid = 1;
        this.loadChildNavBar(cid);
    }

    loadChildNavBar(cid) {
        API.loadChildNav(cid)
            .then(res =>
                    // console.log(res.data)
                    this.setState({children: res.data})
                //this.setState({children: JSON.stringify(res.data)})
            )
            .catch(err => console.log(err));
    };

    /** constructor() {
        super();
        this.sampleChildren = [
            {
                first_name: "Maya",
                nickname: "Supergirlie",
                points: "5",
                avatar: "1"
            },
            {
                first_name: "Tim",
                nickname: "Tiny",
                points: "15",
                avatar: "1"
            },
        ]
    } **/


    render() {
        return (
            <Router>
                <div>
                    <ChildNav first_name={this.state.first_name} nickname={this.state.nickname}
                              points={this.state.points} //avatar={this.state.avatar.avatar_url}
                    />
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