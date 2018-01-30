import React from "react";
import API from "../../utils/API";
import List from 'material-ui/List';
import ApprovalList from '../../components/Card/ApprovalList';

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
                            <h2>Missions</h2>
                            <List>{this.state.missionsAppr.map((each, m) => {
                                return (
                                    <ApprovalList key={m} title={each.parent_mission.mission_title} points={each.parent_mission.mission_point_value}
                                                description={each.parent_mission.mission_description} name={each.child.first_name}
                                    />
                                );
                            })}</List>
                        </div>
                        <div className={'row'}>
                            {console.log(this.state.rewardsAppr)}
                            <h2>Rewards</h2>
                            <List>{this.state.rewardsAppr.map((each, r) => {
                                return (
                                    <ApprovalList key={r} title={each.parent_reward.reward_name} points={each.parent_reward.reward_points_required}
                                                description={each.parent_reward.reward_description} name={each.child.first_name}
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
                    <h1>Approvals</h1>
                    <div>
                        <p>There are no missions or Rewards to approve.</p>
                    </div>
                </div>
            );
        }
    }
}

