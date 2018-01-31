import React, {Component} from "react";
import {Card, CardTitle, CardText} from 'material-ui/Card';
import API from "../../utils/API";

//import Divider from 'material-ui/Divider';
//import Subheader from 'material-ui/Subheader';
//import Avatar from 'material-ui/Avatar';


class MissCard extends Component {


    constructor(props) {
        super();

        this.state = {
            title: props.title,
            points: props.points,
            description: props.description,
            video: props.video,
            missionId: props.mid,
            status: props.status,
        };
    }

    handleCompleteMission = event => {
        event.preventDefault();
        // const cid = localStorage.getItem('childId');
        API.updateChildMissionStatus(this.state.missionId, 'C')
            .then(res =>
                this.setState({status: 'C'})
            )
            .catch(err => console.log(err));

    };

    render() {

        if (this.state.status === 'I') {
            return (
                <div className={"col-lg-4 col-md-12 mb-3"}>
                    <div>
                        <Card className={"p-2"}>
                            <CardTitle style={{padding: "8px"}}
                                       title={this.state.title}/>
                            <CardText style={{padding: "8px"}}>Description: {this.state.description}</CardText>
                            <CardText style={{padding: "8px"}}>Points: {this.state.points}</CardText>
                            <CardText style={{padding: "8px"}}>Status: {this.state.status}</CardText>

                            <CardText>
                                <div>
                                    <button data-mission-id={this.state.missionId} onClick={this.handleCompleteMission}>
                                        Complete
                                    </button>
                                </div>
                            </CardText>
                        </Card>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className={"col-lg-4 col-md-12 mb-3"}>
                    <div>
                        <Card className={"p-2"}>
                            <CardTitle style={{padding: "8px"}}
                                       title={this.state.title}/>
                            <CardText style={{padding: "8px"}}>Description: {this.state.description}</CardText>
                            <CardText style={{padding: "8px"}}>Points: {this.state.points}</CardText>
                            <CardText style={{padding: "8px"}}>Status: {this.state.status}</CardText>
                        </Card>
                    </div>
                </div>
            );
        }
    }
}

export default MissCard;