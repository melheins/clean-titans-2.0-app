import React from "react";
import API from "../../utils/API";
import List from 'material-ui/List';
import ParentList from '../../components/Card/ParentList';

export class Missions extends React.Component {

    state = {
        missions: []
    };

    componentDidMount() {
        const pid = localStorage.getItem('parentId');
        console.log('Missions - Parent Id: ' + pid);
        this.loadMissionSection(pid);
    }

    loadMissionSection(pid) {
        API.loadMissionSec(pid)
            .then(res =>
                    // console.log(res.data)
                    this.setState({missions: res.data})
                //this.setState({children: JSON.stringify(res.data)})
            )
            .catch(err => console.log(err));
    };



    render() {

        if (this.state.missions.length > 0) {
            return (
                <div className="container">
                    <h1>Missions</h1>
                    <div>
                        <div className={'row'}>
                            {console.log(this.state.missions)}
                            <List>{this.state.missions.map((each, i) => {
                                // console.log(each);
                                // console.log(i);
                                return (
                                        <ParentList key={i} title={each.mission_title} points={each.mission_point_value}
                                                  description={each.mission_description} video={each.mission_video_url}
                                        />
                                    );
                            })}</List>
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

