import React from "react";
import API from "../../utils/API";
import List from 'material-ui/List';
import ParentList from '../../components/Card/ParentList';

export class Approvals extends React.Component {

    state = {
        rewardsAppr: [],
        missionsAppr: []
    };

    componentDidMount() {
        const pid = localStorage.getItem('parentId');
        console.log('Missions - Parent Id: ' + pid);
        this.loadMissionSection(pid);
        this.loadRewardSection(pid);

    }

    loadMissionSection(pid) {
        API.loadMisApprovalsSec(pid)
            .then(res =>
                    // console.log(res.data)
                    this.setState({missionsAppr: res.data})
                //this.setState({children: JSON.stringify(res.data)})
            )
            .catch(err => console.log(err));
    };

    loadRewardSection(pid) {
        API.loadRewApprovalsSec(pid)
            .then(res =>
                    // console.log(res.data)
                    this.setState({rewardsAppr: res.data})
                //this.setState({children: JSON.stringify(res.data)})
            )
            .catch(err => console.log(err));
    };

    render() {

        if (this.state.missionsAppr.length > 0 || this.state.rewardsAppr.length > 0) {
            return (
                <div className="container">
                    <h1>Approvals</h1>
                    <div>
                        <div className={'row'}>
                            {console.log(this.state.missionsAppr)}
                            <List>{this.state.missionsAppr.map((each, m) => {
                                return (
                                    <ParentList key={m} title={each.parent_mission.mission_title} points={each.mission_point_value}
                                                description={each.mission_description} video={each.mission_video_url}
                                    />
                                );
                            })}</List>
                        </div>
                        <div className={'row'}>
                            {console.log(this.state.rewardsAppr)}
                            <List>{this.state.rewardsAppr.map((each, r) => {
                                return (
                                    <ParentList key={r} title={each.parent_reward.reward_name} points={each.reward_points_required}
                                                description={each.reward_description}
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

