// src/Auth/Auth.js

import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'regas.auth0.com',
        clientID: '3j2OVQKQy5NMMVpj5Kz1KaaOHWTNLqfC',
        redirectUri: 'https://clean-titans-2.herokuapp.com/parent',
        audience: 'https://regas.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login() {
        this.auth0.authorize();
    }
}