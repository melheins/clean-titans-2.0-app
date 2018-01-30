import React, { Component } from "react";
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';



class RewCard extends Component {
    constructor(props) {
        super();

        this.state = {
            title: props.title,
            points: props.points,
            description: props.description,
            rewardId: props.rid,
        };
    }


    render() {
        return (
            <div className={"col-lg-4 col-md-12 mb-3"}>
                <div>
                    <Card className={"p-2"}>
                        <CardTitle style={{padding: "8px"}}
                                   title={this.state.title}/>
                        <CardText style={{padding: "8px"}}>Description: {this.state.description}</CardText>
                        <CardText style={{padding: "8px"}}>Points: {this.state.points}</CardText>
                        <CardText><div><button data-mission-id={this.state.rewardId}>Purchase</button></div></CardText>

                    </Card>
                </div>
            </div>
        );
    }
}

export default RewCard;