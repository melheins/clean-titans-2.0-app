import React, {Component} from "react";
import API from "../../utils/API";

//import "./Nav.css";
import RewCard from '../../components/Card/RewCard';

export class Rewards extends React.Component {

    state = {
        rewards: [],
        sampleRewards: [],
    };

    componentDidMount() {
        //const pid=1;
        this.loadRewardSection();
    }

    loadRewardSection () {
        API.loadRewardSec()
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
                <div>
                    <h1>Team</h1>
                    <div>
                        <div className={'row'}>
                            {console.log(this.state.rewards)}
                            {this.state.rewards.map((each, i) => {
                                // console.log(each);
                                // console.log(i);
                                return <RewCard key={i} title={each.reward_name} points={each.reward_points_required}
                                                description={each.reward_description}
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
                        <p>There are no rewards on file</p>
                    </div>
                </div>
            );
        }
    }
}