import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ChildLoginCard from "../../components/Card/ChildLoginCard";
import API from "../../utils/API";

export class ChildLogin extends React.Component {
    state = {
        children: []
    };

    componentDidMount() {
        const pid=1;
        this.loadChildLogin(pid);
    }

    loadChildLogin (pid) {
        API.loadChildLogin(pid)
            .then(res =>
                this.setState({children: res.data})
            )
            .catch(err => console.log(err));
    };

    render() {

        if (this.state.children.length > 0) {
            return (
                <div className="container">
                    <div className={'row'}>
                        {this.state.children.map((each, i) => {
                            return <ChildLoginCard key={i} first_name={each.first_name} nickname={each.nickname}
                                                    avatar={each.avatar.avatar_url}
                            />;
                        })}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="container">
                    <div>
                        <p>There are no children on file</p>
                    </div>
                </div>
            );
        }
    }
}

