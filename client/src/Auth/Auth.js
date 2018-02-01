import auth0 from 'auth0-js';
//import history from "../history";
const jwtDecode = require('jwt-decode');



const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';

const CLIENT_ID = '3j2OVQKQy5NMMVpj5Kz1KaaOHWTNLqfC';
const CLIENT_DOMAIN = 'regas.auth0.com';
//const REDIRECT = "http://localhost:3000/parent";
const REDIRECT = 'https://clean-titans-2.herokuapp.com/parent';
const SCOPE = 'openid profile';
const AUDIENCE = 'https://regas.auth0.com/userinfo';

let auth = new auth0.WebAuth({
    clientID: CLIENT_ID,
    domain: CLIENT_DOMAIN
});

export function login() {
    console.log(REDIRECT);
    auth.authorize({
        responseType: 'token id_token',
        redirectUri: REDIRECT,
        audience: AUDIENCE,
        scope: SCOPE
    });
}

export function logout() {
    clearIdToken();
    clearAccessToken();
    // browserHistory.push('/');
}

export function requireAuth(nextState, replace) {
    if (!isLoggedIn()) {
        replace({pathname: '/parent'});
    }
}

export function getIdToken() {
    return localStorage.getItem(ID_TOKEN_KEY);
}

export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function clearIdToken() {
    localStorage.removeItem(ID_TOKEN_KEY);
}

function clearAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name) {
    let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Get and store access_token in local storage
export function setAccessToken() {
    let accessToken = getParameterByName('access_token');
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

// Get and store id_token in local storage
export function setIdToken() {
    let idToken = getParameterByName('id_token');
    localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function isLoggedIn() {
    const idToken = getIdToken();
    return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
    const token = jwtDecode(encodedToken);
    if (!token.exp) { return null; }

    const date = new Date(0);
    date.setUTCSeconds(token.exp);

    return date;
}

function isTokenExpired(token) {
    const expirationDate = getTokenExpirationDate(token);
    return expirationDate < new Date();
}


// export default class Auth {
//     auth0 = new auth0.WebAuth({
//         domain: 'regas.auth0.com',
//         clientID: '3j2OVQKQy5NMMVpj5Kz1KaaOHWTNLqfC',
//         // redirectUri: 'https://clean-titans-2.herokuapp.com/parent',
//         redirectUri: 'http://localhost:3000/parent',
//         audience: 'https://regas.auth0.com/userinfo',
//         responseType: 'token id_token',
//         scope: 'openid'
//     });
//
//     login() {
//         this.auth0.authorize();
//     }
//
//     constructor() {
//         this.login = this.login.bind(this);
//         this.logout = this.logout.bind(this);
//         this.handleAuthentication = this.handleAuthentication.bind(this);
//         this.isAuthenticated = this.isAuthenticated.bind(this);
//     }
//
//     handleAuthentication() {
//         this.auth0.parseHash((err, authResult) => {
//             if (authResult && authResult.accessToken && authResult.idToken) {
//                 this.setSession(authResult);
//                 history.replace('/');
//             } else if (err) {
//                 history.replace('/');
//                 console.log(err);
//             }
//         });
//     }
//
//     setSession(authResult) {
//         // Set the time that the access token will expire at
//         let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
//         localStorage.setItem('access_token', authResult.accessToken);
//         localStorage.setItem('id_token', authResult.idToken);
//         localStorage.setItem('expires_at', expiresAt);
//         // navigate to the home route
//         history.replace('/parent');
//     }
//
//     logout() {
//         // Clear access token and ID token from local storage
//         localStorage.removeItem('access_token');
//         localStorage.removeItem('id_token');
//         localStorage.removeItem('expires_at');
//         // navigate to the home route
//         history.replace('/');
//     }
//
//     isAuthenticated() {
//         // Check whether the current time is past the
//         // access token's expiry time
//         let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
//         return new Date().getTime() < expiresAt;
//     }
// }