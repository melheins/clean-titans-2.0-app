import React, {Component} from "react";
import API from "../../utils/API";

//import "./Nav.css";
import MissCard from '../../components/Card/MissCard';

export class Missions extends React.Component {

    state = {
        missions: [],
        sampleMissions: [],
    };

    componentDidMount() {
        //const pid=1;
        this.loadMissionSection();
    }

    loadMissionSection () {
        API.loadMissionSec()
            .then(res =>
                    // console.log(res.data)
                    this.setState({missions: res.data})
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

        if (this.state.missions.length > 0) {
            return (
                <div>
                    <h1>Team</h1>
                    <div>
                        <div className={'row'}>
                            {console.log(this.state.missions)}
                            {this.state.missions.map((each, i) => {
                                // console.log(each);
                                // console.log(i);
                                return <MissCard key={i} title={each.mission_title} points={each.mission_point_value}
                                                 description={each.mission_description} video={each.mission_video_url}
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
                        <p>There are no missions on file</p>
                    </div>
                </div>
            );
        }
    }
}