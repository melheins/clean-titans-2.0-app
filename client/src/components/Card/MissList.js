import React, {Component} from "react";
//import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import {ListItem} from 'material-ui/List';
//import Divider from 'material-ui/Divider';
//import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, black, white} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ModeEditIcon from 'react-material-icons/icons/editor/mode-edit';
import DeleteIcon from 'react-material-icons/icons/action/delete';

import "./List.css";

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400}/>
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
);

class MissList extends Component {


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
            <ListItem
                // leftAvatar={<Avatar src="images/ok-128.jpg"/>}
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
                        <span style={{height:'48px',width:'48px', paddingRight: '10px'}}><ModeEditIcon/></span>
                        <span style={{fontSize: '30px', paddingRight: '10px'}}><DeleteIcon/></span>
                    </div>}
                primaryText={<span style={{fontWeight: 'bold', fontSize: '18px'}}>{this.state.title}</span>}
                secondaryText={
                    <p>
                        <span style={{color: darkBlack}}>{this.state.description}</span>
                    </p>
                } secondaryTextLines={2}

            />
        );
    }
}

export default MissList;