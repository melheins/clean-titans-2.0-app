import React, {Component} from "react";
import {Card, CardTitle, CardText} from 'material-ui/Card';
import CardImg from './CardImg'
import {black, white} from 'material-ui/styles/colors';

class TeamCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: this.props.first_name,
            nickname: this.props.nickname,
            points: this.props.points,
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
                        <div style={{float:'right'}}><CardImg imgSrc={this.props.avatar} /></div>

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

export default TeamCard;