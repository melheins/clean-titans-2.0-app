import React, {Component} from "react";
import API from "../../utils/API";

//import "./Nav.css";
import TeamCard from '../../components/Card/TeamCard';

export class Team extends React.Component {

    state = {
        children: [],
        sampleChildren: [],
    };

    componentDidMount() {
        const pid=1;
        this.loadTeamSection(pid);
    }

    loadTeamSection (pid) {
        API.loadTeamSec(pid)
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

        if (this.state.children.length > 0) {
            return (
                <div>
                    <h1>Team</h1>
                    <div>
                        <div className={'row'}>
                            {console.log(this.state.children)}
                            {this.state.children.map((each, i) => {
                               // console.log(each);
                               // console.log(i);
                                return <TeamCard key={i} first_name={each.first_name} nickname={each.nickname}
                                                  points={each.points}
                                />;
                            })}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h1>Team</h1>
                    <div>
                        <p>There are no children on file</p>
                    </div>
                </div>
            );
        }
    }
}