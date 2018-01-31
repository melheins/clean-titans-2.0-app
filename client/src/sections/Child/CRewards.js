import React, {Component} from "react";
import API from "../../utils/API";
import RewCard from '../../components/Card/RewCard';

export class CRewards extends React.Component {

    state = {
        rewards: [],
    };

    componentDidMount() {
        console.log('Reward - Child Id: ' + localStorage.getItem('childId'));
        const cid = localStorage.getItem('childId');
        // const cid = 4;
        this.loadRewardSection(cid);
    }

    loadRewardSection(cid) {
        console.log('Reward P2 - Child Id: ' + cid);
        API.loadChildRewardSec(cid)
            .then(res =>
                    // console.log(res.data)
                    this.setState({rewards: res.data})
                //this.setState({children: JSON.stringify(res.data)})
            )
            .catch(err => console.log(err));
    };

    render() {
        if (this.state.rewards.length > 0) {
            return (
                <div className="container">
                    <h1>Rewards</h1>
                    <div>
                        <div className={'row'}>
                            {console.log(this.state.rewards)}
                            {this.state.rewards.map((each, i) => {
                                return <RewCard key={i} title={each.parent_reward.reward_name}
                                                points={each.parent_reward.reward_points_required}
                                                description={each.parent_reward.reward_description}
                                                status={each.reward_status}
                                                rid={each.id}
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