import React, {Component} from "react";
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';


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
            <ListItem
                leftAvatar={<Avatar src="images/ok-128.jpg"/>}
                rightIconButton={rightIconMenu}
                primaryText={this.state.title}
                secondaryText={
                    <p>
                        <span style={{color: darkBlack}}>{this.state.description}</span> <span
                        style={{}}>{this.state.points}</span>
                    </p>
                } secondaryTextLines={2}

            />
        );
    }
}

export default MissCard;