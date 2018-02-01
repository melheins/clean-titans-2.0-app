import React from "react";
import API from "../../utils/API";
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export class AddChild extends React.Component {

    state = {
        newChildName:'',
        newChildNick:'',
        newChildAvatar:'',
        avatars: [],
        value: null,
    };

    componentDidMount() {
        const pid = localStorage.getItem('parentId');
        console.log('Team - Parent Id: ' + pid);
        this.loadAvatarsSec();
    }

    loadAvatarsSec() {
        API.loadAvatars()
            .then(res =>
                    // console.log(res.data)
                    this.setState({avatars: res.data})
                //this.setState({children: JSON.stringify(res.data)})
            )
            .catch(err => console.log(err));
    };

    handleAvatarChange = (event, index, value) => this.setState({newChildAvatar: value});
    handleNameChange = (event, index, value) => this.setState({newChildName: value});
    handleNickChange = (event, index, value) => this.setState({newChildNick: value});

    handleAddChildSave = event => {
        event.preventDefault();
        const pid = localStorage.getItem('parentId');
        API.teamAddChild(pid,this.state.newChildName,this.state.newChildNick,this.state.newChildAvatar)
            .then(res =>
                console.log(res.data)
            )
            .catch(err => console.log(err));
    };

    render() {

        return (
            <div className="container">
                <h1>Team</h1>

                <div>
                    <div className={'row'} style={{backgroundColor: '#FFFFFF'}}>
                        <TextField
                            defaultValue="First Name"
                            floatingLabelText="First Name"
                            onChange={this.handleNameChange}
                        /><br/>
                        <TextField
                            defaultValue="Nickname"
                            floatingLabelText="Nickname"
                            onChange={this.handleNickChange}
                        /><br/>
                        <div>
                            <h3>Select an Avatar:</h3>
                            <SelectField value={this.state.newChildAvatar} onChange={this.handleAvatarChange}>
                                {console.log(this.state.avatars)}
                                {this.state.avatars.map((each, a) => {
                                    // console.log(each);
                                    // console.log(i);
                                    return <MenuItem value={a} label={each.avatar_name} primaryText={each.avatar_name}>
                                        <div><img alt={each.avatar_name} className={"nav-icon-img"}
                                                  src={require(`../../assets/childavatars/${each.avatar_url}.jpg`)}/>
                                        </div>
                                    </MenuItem>;
                                })}

                            </SelectField>
                        </div>
                        <FlatButton
                            style={{backgroundColor: 'red', fontWeight: 'bold', fontFamily: "Avengeance Mightiest"}}
                            onClick={this.handleAddChildSave}>
                            Add New Child
                        </FlatButton>
                    </div>
                </div>
            </div>
        );
    }
}
