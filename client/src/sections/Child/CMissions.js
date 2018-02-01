import React from "react";
import API from "../../utils/API";

//import "./Nav.css";
import MissCard from '../../components/Card/MissCard';

export class CMissions extends React.Component {

    state = {
        missions: [],
        sampleMissions: [],
    };

    componentDidMount() {
        console.log('Mission - Child Id: ' + localStorage.getItem('childId'));
        const cid = localStorage.getItem('childId');
        // const cid = 4;
        this.loadMissionSection(cid);
    }

    loadMissionSection(cid) {
        console.log('Mission P2 - Child Id: ' + cid);
        API.loadChildMissionSec(cid)
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
                <div className="container">
                    <h1>Missions</h1>
                    <div>
                        <div className={'row'}>
                            {console.log(this.state.missions)}
                            {this.state.missions.map((each, i) => {
                                return <MissCard key={i} title={each.parent_mission.mission_title}
                                                 points={each.parent_mission.mission_point_value}
                                                 description={each.parent_mission.mission_description}
                                                 video={each.parent_mission.mission_video_url}
                                                 status={each.mission_status}
                                                 mid={each.id}
                                />;
                            })}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="container">
                    <h1>Missions</h1>
                    <div>
                        <p>There are no missions on file</p>
                    </div>
                </div>
            );
        }
    }
}