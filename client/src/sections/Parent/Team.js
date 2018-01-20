import React, {Component} from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

//import "./Nav.css";
import ChildCard from '../../components/Card/Card';

export class Team extends React.Component {


    componentDidMount() {
        this.loadChildren();
    }

    loadChildren = () => {
        API.getChildren()
            .then(res =>

                this.setState({})
            )
            .catch(err => console.log(err));
    };

    constructor() {
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
    }

    render() {
        return (
            <div>
                <h1>Team</h1>
                <div>
                    <div className={'row'}>
                        {this.sampleChildren.map((each, i) => {
                            console.log(each);
                            console.log(i);
                            return <ChildCard key={i} first_name={each.first_name} nickname={each.nickname}
                                            points={each.points}
                            />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}