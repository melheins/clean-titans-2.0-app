import React, {Component} from "react";
import {Card, CardTitle, CardText} from 'material-ui/Card';
import './TeamCard.css'
import FlatButton from 'material-ui/FlatButton';
import API from "../../utils/API";

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
                            <CardTitle style={{padding: "8px", fontFamily: "Avengeance Mightiest"}}
                                       title={this.state.title}/>
                            <CardText style={{
                                padding: "8px",
                                fontFamily: "Comic Geek"
                            }}>{this.state.description}</CardText>
                            <CardText style={{
                                padding: "8px",
                                fontFamily: "Comic Geek"
                            }}>{this.state.points}pts</CardText>
                            <CardText>
                                <div>
                                    <FlatButton style={{
                                        backgroundColor: 'red',
                                        fontWeight: 'bold',
                                        fontFamily: "Avengeance Mightiest"
                                    }}
                                                data-mission-id={this.state.missionId}
                                                onClick={this.handleCompleteMission}>
                                        Complete
                                    </FlatButton>
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
                        <Card className={"p-2"} style={{backgroundColor: "#9E9E9E"}}>
                            <CardTitle style={{padding: "8px", fontFamily: "Avengeance Mightiest"}}
                                       title={this.state.title}/>
                            <CardText style={{
                                padding: "8px", fontFamily: "Comic Geek"
                            }}>{this.state.description}</CardText>
                            <CardText style={{
                                padding: "8px", fontFamily: "Comic Geek"
                            }}>{this.state.points}pts</CardText>
                            <CardText style={{padding: "8px"}}>Awaiting Command Approval</CardText>
                        </Card>
                    </div>
                </div>
            );
        }
    }
}

export default MissCard;