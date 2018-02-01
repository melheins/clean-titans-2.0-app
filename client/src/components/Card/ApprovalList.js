import React, {Component} from "react";
import {darkBlack, black, white} from 'material-ui/styles/colors';
import {ListItem} from 'material-ui/List';
import CheckIcon from 'react-material-icons/icons/action/check-circle';
import CancelIcon from 'react-material-icons/icons/navigation/cancel';
import API from "../../utils/API";
import IconButton from 'material-ui/IconButton';


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


        // State matches the JSON from the DB Schema
        // Methods is nested object with home/work/mobile/email
        // Interactions is an array, populated from Interactions schema
        this.state = {
            title: props.title,
            points: props.points,
            description: props.description,
            child: props.name,
            id: props.id,
            type: props.type,
            status: props.status,
            cid: props.cid
        };
    }

    handleApproveMission = event => {
        event.preventDefault();
        //console.log('Mission Update P1 - ApprovalList.js');
        API.approveDenyMission(this.state.id, 'A', this.state.cid, this.state.points)
            .then(res =>
                //console.log('Mission Update P4 - Res Complete')
                //console.log(res.data)
                this.setState({status: 'A'})
            )
            .catch(err => console.log(err));
    };

    handleDenyMission = event => {
        event.preventDefault();
        API.approveDenyMission(this.state.id, 'I', this.state.cid, this.state.points)
            .then(res =>
                this.setState({status: 'I'})
            )
            .catch(err => console.log(err));
    };

    handleApproveReward = event => {
        event.preventDefault();
        API.approveReward(this.state.id, 'A')
            .then(res =>
                this.setState({status: 'A'})
            )
            .catch(err => console.log(err));
    };

    render() {
        if (this.state.status === 'C') {
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
                                <IconButton data-mission-id={this.state.id} onClick={this.handleApproveMission}
                                        iconStyle={styles.mediumIcon}
                                        style={styles.medium}>
                                    <CheckIcon/>
                                </IconButton>
                            </span>
                            <span style={{fontSize: '30px', paddingRight: '10px'}}>
                                <IconButton data-mission-id={this.state.id} onClick={this.handleDenyMission}
                                        iconStyle={styles.mediumIcon}
                                        style={styles.medium}>
                                    <CancelIcon/>
                                </IconButton>
                            </span>
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
        if (this.state.status === 'R') {
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
                            <IconButton data-mission-id={this.state.id} onClick={this.handleApproveReward}
                                        iconStyle={styles.mediumIcon}
                                        style={styles.medium}>
                                <CheckIcon/>
                            </IconButton>
                        </span>
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
        else {
            return (null);
        }
    }
}

export default ParentList;

