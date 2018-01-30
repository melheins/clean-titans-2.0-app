import React, {Component} from "react";
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import CardImg from './CardImg'
import {grey400, darkBlack, black, white} from 'material-ui/styles/colors';


class NewChild extends Component {
    constructor(props) {
        super(props);

        // State matches the JSON from the MongoDB Schema
        // Methods is nested object with home/work/mobile/email
        // Interactions is an array, populated from Interactions schema
        this.state = {
            first_name: this.props.first_name,
            nickname: this.props.nickname,
            uid: this.props.uid
        };
    }

    render() {

        return (

            <div className={"col-lg-4 col-md-12 mb-3"}>
                <div>
                    <Card className={"p-2"} style={{
                        backgroundColor: white,
                        borderStyle: 'solid',
                        borderColor: black,
                        borderWidth: '5px', minHeight:'150px'
                    }}>
                        {console.log(this.props.avatar)}
                        <div style={{float:'right'}}><CardImg imgSrc={this.props.avatar} />
                            <Paper zDepth={2}>
                                <TextField hintText="First name" underlineShow={false} />
                                <Divider />
                                <TextField hintText="Nickname" underlineShow={false} />
                                <Divider />
                            </Paper>


                            <CardTitle style={{padding: "8px"}}
                                   title={this.state.first_name}/>
                        <CardText style={{padding: "8px"}}>
                            <div>
                                <p>Nickname: {this.state.nickname}</p>
                                <p>Points: {this.state.points}</p>
                            </div>
                        </CardText>
                    </Card>
                </div>
            </div>
        );
    }
}

export default NewChild;