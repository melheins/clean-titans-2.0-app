import React from "react";
import API from "../../utils/API";
import NewChild from '../../components/Card/addChildCard';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export class AddChild extends React.Component {

    state = {
        children: [],
        sampleChildren: [],
    };

    componentDidMount() {
        const pid = localStorage.getItem('parentId');
        console.log('Team - Parent Id: ' + pid);
        this.loadChildInfo();
    }



    /** constructor() {
        super();
        this.sampleChildren = [
            {
                first_name: "Maya",
                nickname: "Supergirlie",
                points: "5",
                avatar: "1"
            },
            {
                first_name: "Tim",
                nickname: "Tiny",
                points: "15",
                avatar: "1"
            },
        ]
    } **/

    render() {

        if (this.state.children.length > 0) {
            return (
                <div className="container">
                    <h1>Team</h1>
                    <FloatingActionButton style={backgroundColor="red"} onClick={this.newChild}>
                        <ContentAdd />
                    </FloatingActionButton>
                    <div>
                        <div className={'row'}>
                            {console.log(this.state.children)}
                            {this.state.children.map((each, i) => {
                                // console.log(each);
                                // console.log(i);
                                return <TeamCard key={i} first_name={each.first_name} nickname={each.nickname}
                                                 points={each.points} avatar={each.avatar.avatar_url}
                                />;
                            })}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="container">
                    <h1>Team</h1>
                    <div>
                        <p>There are no children on file</p>
                    </div>
                </div>
            );
        }
    }
}
