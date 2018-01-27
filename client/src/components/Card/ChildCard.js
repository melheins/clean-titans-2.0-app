import React, {Component} from "react";
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
//import Divider from 'material-ui/Divider';
//import Subheader from 'material-ui/Subheader';
//import Avatar from 'material-ui/Avatar';


class MissCard extends Component {


    constructor(props) {
        super();

        // State matches the JSON from the MongoDB Schema
        // Methods is nested object with home/work/mobile/email
        // Interactions is an array, populated from Interactions schema
        this.state = {
            title: props.title,
            points: props.points,
            description: props.description,
            video: props.video,
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
                    </Card>
                </div>
            </div>
        );
    }
}

export default MissCard;