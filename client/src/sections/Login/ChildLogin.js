import React from "react";
import ChildLoginCard from "../../components/Card/ChildLoginCard";
import API from "../../utils/API";

export default class ChildLogin extends React.Component {
    state = {
        children: []
    };

    componentDidMount() {
        const pid = localStorage.getItem('parentId');
        console.log('Team - Parent Id: ' + pid);
        this.loadChildLogin(pid);
    }

    loadChildLogin (pid) {
        API.loadChildLogin(pid)
            .then(res =>
                this.setState({children: res.data})
            )
            .catch(err => console.log(err));
    };

    render() {

        if (this.state.children.length > 0) {
            return (
                <div className="container" style={{maxWidth: "600px"}}>
                    <div className={'row'} style={{display: "inline-flex", margin: "0 auto"}}>
                        {this.state.children.map((each, i) => {
                            return <ChildLoginCard key={i} first_name={each.first_name} nickname={each.nickname}
                                                    avatar={each.avatar.avatar_url} id={each.id}
                            />;
                        })}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="container">
                    <div>
                        <p>There are no children on file</p>
                    </div>
                </div>
            );
        }
    }
}

