// App.jsx

var AppLock = React.createClass({
    // ...
    componentWillMount: function() {
        this.lock = new Auth0Lock('3j2OVQKQy5NMMVpj5Kz1KaaOHWTNLqfC', 'regas.auth0.com');
    },
    render: function() {
        return (<Home lock={this.lock} />);
    }
});