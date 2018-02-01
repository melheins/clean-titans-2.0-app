import React, {Component} from "react";
import {darkBlack, black, white} from 'material-ui/styles/colors';
import {ListItem} from 'material-ui/List';
import ModeEditIcon from 'react-material-icons/icons/editor/mode-edit';
import DeleteIcon from 'react-material-icons/icons/action/delete';
import IconButton from 'material-ui/IconButton';
import API from "../../utils/API";

import "./List.css";

const styles = {
    mediumIcon: {
        width: 48,
        height: 48,
    },
    medium: {
        // width: 96,
        height: 96,
        // padding: 24,
    },
};

class ParentList extends Component {

    constructor(props) {
        super();

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
                disabled={true}
                style={{
                    backgroundColor: white,
                    borderStyle: 'solid',
                    borderColor: black,
                    borderWidth: '5px',
                    marginBottom: '5px'
                }}
                rightIconButton={
                    <div style={{color: black, fontWeight: 'bold'}}>
                        <span style={{fontSize: '20px', paddingRight: '10px'}}>{this.state.points}pts</span>
                        <span style={{paddingRight: '10px'}}>
                                <IconButton data-mission-id={this.state.id} onClick={this.handleEditItem}
                                            iconStyle={styles.mediumIcon}
                                            style={styles.medium}>
                                    <ModeEditIcon/>
                                </IconButton>
                        </span>
                        <span style={{paddingRight: '10px'}}>
                                <IconButton data-mission-id={this.state.id} onClick={this.handleDeleteItem}
                                            iconStyle={styles.mediumIcon}
                                            style={styles.medium}>
                                    <DeleteIcon/>
                                </IconButton>
                        </span>
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

export default ParentList;

