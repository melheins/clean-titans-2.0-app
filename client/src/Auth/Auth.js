// src/Auth/Auth.js

import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'regas.auth0.com',
        clientID: 'fqt2c8HBdwPWw2oIzVGAv0KORXAAiYE7',
        redirectUri: 'http://localhost:3001/callback',
        audience: 'https://regas.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login() {
        this.auth0.authorize();
    }
}

