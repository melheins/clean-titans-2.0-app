import React from "react";
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

    loadRewardSection = (cid) => {
        //
        API.loadChildRewardSec(cid)
            .then(res =>
                this.setState({rewards: res.data})
            ).then(
            console.log(this.state.rewards)
        )
            .catch(err => console.log(err));
        //console.log('test');

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
                                return <RewCard key={each.id} title={each.parent_reward.reward_name}
                                                points={each.parent_reward.reward_points_required}
                                                description={each.parent_reward.reward_description}
                                                status={each.reward_status}
                                                rid={each.id}
                                                handler={this.loadRewardSection}
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