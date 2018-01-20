import React, { Component } from "react";
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';



class ChildCard extends Component {
    constructor(props) {
        super();

        // State matches the JSON from the MongoDB Schema
        // Methods is nested object with home/work/mobile/email
        // Interactions is an array, populated from Interactions schema
        this.state = {
            first_name: props.first_name,
            nickname: props.nickname,
            points: props.points,
        };
    }


    render() {
        return (
            <div className={"col-lg-4 col-md-12 mb-3"}>
                <div>
                    <Card className={"p-2"}>
                        <CardTitle style={{padding: "8px"}}
                                   title={"Name: " + this.state.first_name}/>
                        <CardText style={{padding: "8px"}}>Nickname: {this.state.nickname}</CardText>
                        <CardText style={{padding: "8px"}}>Points: {this.state.points}</CardText>
                    </Card>
                </div>
            </div>
        );
    }
}

export default ChildCard;