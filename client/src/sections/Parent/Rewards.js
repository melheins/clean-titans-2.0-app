import React from "react";
import API from "../../utils/API";
import ParentList from '../../components/Card/ParentList';
import List from 'material-ui/List';

export class Rewards extends React.Component {

    state = {
        rewards: [],
        sampleRewards: [],
    };

    componentDidMount() {
        const pid = localStorage.getItem('parentId');
        console.log('Rewards - Parent Id: ' + pid);
        this.loadRewardSection(pid);
    }

    loadRewardSection(pid) {
        API.loadRewardSec(pid)
            .then(res =>
                    // console.log(res.data)
                    this.setState({rewards: res.data})
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

        if (this.state.rewards.length > 0) {
            return (
                <div className="container">
                    <h1>Rewards</h1>
                    <div>
                        <div className={'row'}>
                            {console.log(this.state.rewards)}
                            <List>{this.state.rewards.map((each, i) => {
                                // console.log(each);
                                // console.log(i);
                                return ( <ParentList key={i} title={each.reward_name} points={each.reward_points_required}
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
                    <h1>Rewards</h1>
                    <div>
                        <p>There are no rewards on file</p>
                    </div>
                </div>
            );
        }
    }
}

