import React, {Component} from "react";
import {Card, CardTitle, CardText} from 'material-ui/Card';
import API from "../../utils/API";
import FlatButton from 'material-ui/FlatButton';


class RewCard extends Component {
    constructor(props) {
        super();

        this.state = {
            title: props.title,
            points: props.points,
            description: props.description,
            rewardId: props.rid,
            status: props.status,
        };
    }

    handlePurchaseReward = event => {
        event.preventDefault();
        const cid = localStorage.getItem('childId');
        API.purchaseChildReward(this.state.rewardId,'R',cid,this.state.points)
            .then(res =>
                this.props.handler
            )
            .catch(err => console.log(err));
    };

    render() {
<<<<<<< HEAD
        return (
            <div className={"col-lg-4 col-md-12 mb-3"}>
                <div>
                    <Card className={"p-2"}>
                        <CardTitle style={{padding: "8px",
                                           fontFamily: "Avengeance Mightiest"}}
                                   title={this.state.title}/>
                        <CardText style={{padding: "8px", fontFamily: "Comic Geek"}}>Description: {this.state.description}</CardText>
                        <CardText style={{padding: "8px", fontFamily: "Comic Geek"}}>Points: {this.state.points}</CardText>
                        <CardText><div><button style={{fontFamily: "Avengeance Mightiest"}} data-mission-id={this.state.rewardId}>Purchase</button></div></CardText>

                    </Card>
=======
        if (this.state.status === 'I') {
            return (
                <div className={"col-lg-4 col-md-12 mb-3"}>
                    <div>
                        <Card className={"p-2"}>
                            <CardTitle style={{padding: "8px"}}
                                       title={this.state.title}/>
                            <CardText style={{padding: "8px"}}>Description: {this.state.description}</CardText>
                            <CardText style={{padding: "8px"}}>Points: {this.state.points}</CardText>
                            <CardText>
                                <div>
                                    <FlatButton style={{backgroundColor:'red',fontWeight:'bold', fontFamily: "Avengeance Mightiest"}} data-mission-id={this.state.rewardId} onClick={this.handlePurchaseReward}>
                                        Purchase
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
                            <CardTitle style={{padding: "8px"}}
                                       title={this.state.title}/>
                            <CardText style={{padding: "8px"}}>Description: {this.state.description}</CardText>
                            <CardText style={{padding: "8px"}}>Points: {this.state.points}</CardText>
                            <CardText style={{padding: "8px"}}>Awaiting Command Approval</CardText>
                        </Card>
                    </div>
>>>>>>> ac44276ccad01508c5581f98507ddce6a1242da7
                </div>
            );
        }
    }
}

export default RewCard;