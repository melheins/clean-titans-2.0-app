import React from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

//import "./Nav.css";


export class Team extends React.Component {

    state = {
        books: [],
        title: "",
        author: "",
        synopsis: ""
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getChildren()
            .then(res =>

                this.setState({ books: res.data, title: "", author: "", synopsis: "" })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <h1>Team</h1>
                <div>
                    <Jumbotron>
                        <h1>Children</h1>
                    </Jumbotron>
                    {this.state.books.length ? (
                        <List>
                            {this.state.books.map(children => (
                                <ListItem key={children.id}>
                                    <Link to={"/books/" + children.id}>
                                        <strong>
                                            {children.first_name}
                                        </strong>
                                    </Link>
                                </ListItem>
                            ))}
                        </List> ) : (
                        <h3>No Results to Display</h3>
                    )}
                </div>
            </div>
        );
    }
}