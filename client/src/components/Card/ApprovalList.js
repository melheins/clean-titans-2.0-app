import React, {Component} from "react";
//import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
//import Divider from 'material-ui/Divider';
//import Avatar from 'material-ui/Avatar';
//import IconButton from 'material-ui/IconButton';
//import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
//import IconMenu from 'material-ui/IconMenu';
//import MenuItem from 'material-ui/MenuItem';
import {darkBlack, black, white} from 'material-ui/styles/colors';
import {ListItem} from 'material-ui/List';
import CheckIcon from 'react-material-icons/icons/action/check-circle';
import CancelIcon from 'react-material-icons/icons/navigation/cancel';

import "./List.css";

class ParentList extends Component {



    constructor(props) {
        super();


        // State matches the JSON from the DB Schema
        // Methods is nested object with home/work/mobile/email
        // Interactions is an array, populated from Interactions schema
        this.state = {
            title: props.title,
            points: props.points,
            description: props.description,
            child: props.name,
        };
    }


    render() {
        return (
            <ListItem
                // leftAvatar={<Avatar src="images/ok-128.jpg"/>}
                disabled={true}
                style={{
                    backgroundColor: white,
                    borderStyle: 'solid',
                    borderColor: black,
                    borderWidth: '5px',
                    marginBottom: '5px'
                }}
                rightIconButton={
                    <div style={{color: black, fontWeight: 'bold', top: '30px'}}>
                        <span style={{fontSize: '20px', paddingRight: '10px'}}>{this.state.points}pts</span>
                        <span style={{height:'48px',width:'48px', paddingRight: '10px'}}><CheckIcon/></span>
                        <span style={{fontSize: '30px', paddingRight: '10px'}}><CancelIcon/></span>
                    </div>}
                primaryText={<span style={{fontWeight: 'bold', fontSize: '18px'}}>{this.state.child}</span>}
                secondaryText={
                    <p>
                        <span style={{color: darkBlack}}>{this.state.title}</span>
                    </p>
                } secondaryTextLines={2}

            />
        );
    }
}

export default ParentList;

