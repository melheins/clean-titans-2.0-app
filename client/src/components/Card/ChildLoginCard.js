import React, {Component} from "react";
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import CardImg from './CardImg'

class ChildLoginCard extends Component {
    constructor(props) {
        super(props);

        // State matches the JSON from the MongoDB Schema
        // Methods is nested object with home/work/mobile/email
        // Interactions is an array, populated from Interactions schema
        this.state = {
            first_name: this.props.first_name,
            nickname: this.props.nickname,
            avatar: this.props.avatar,
            id: this.props.id,
        };
        this.setChild = this.setChild.bind(this);
    }

    setChild() {
        console.log('Mission - Child Id: ' + this.props.id);
        //let cid = this.props.id;
        localStorage.setItem('childId',this.props.id);
        let cid = localStorage.getItem('childId');
        console.log('Mission - Child Id: ' + cid);
    }

    render() {

        return (

            <div className={"col-lg-4 col-md-12 mb-3"}>
                <div>
                    <Card className={"p-2"}>
                        {console.log(this.props.avatar)}
                        <CardImg imgSrc={this.props.avatar}/>
                        <CardTitle style={{padding: "8px"}}
                                   title={this.state.first_name}/>
                        <CardText style={{padding: "8px"}}>Nickname: {this.state.nickname}</CardText>
                        <CardActions>
                            <FlatButton label="Login" href="/child" onClick={this.setChild}/>
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}

export default ChildLoginCard;