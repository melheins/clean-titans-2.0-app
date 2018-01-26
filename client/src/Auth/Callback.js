import { Component } from 'react';
import { setIdToken, setAccessToken } from './Auth';

class Callback extends Component {

    constructor() {
        super()
    }

    componentDidMount() {
        setAccessToken();
        setIdToken();
        window.location.href = "/parent";
    }

    render() {
        return null;
    }
}

export default Callback;