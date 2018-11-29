export default function test() {

  const webAuth = new auth0.WebAuth({
    domain: 'completelyabsurdtrivia.auth0.com',
    clientID: 'JZaEtC58Pg6dlUtSUfluY9R94M9doqBZ',
    redirectUri: 'http://localhost:3000/',
    responseType: 'token id_token',
    scope: 'openid'
  });

  const $loginBtn = $('#sign-in-register a');

  $loginBtn.click(function(e) {
    e.preventDefault();
    if ($(this).text() === 'Sign In / Register') {
      console.log('yes');
      webAuth.authorize();
    } else {
      logout();
    }
  });

  window.x = webAuth;

  function setSession(authResult) {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  function logout() {
    console.log('logout()');

    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    displayButtons();
    webAuth.logout({
      returnTo: 'http://localhost:3000/',
      client_id: 'JZaEtC58Pg6dlUtSUfluY9R94M9doqBZ'
    });
  }

  function isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  function handleAuthentication() {
    webAuth.parseHash(function(err, authResult) {
      console.log('parsing hash');
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = 'profile';
        console.log('LOGGED IN', authResult);
        setSession(authResult);
      } else if (err) {
        console.log(err);
      } else {
        console.log('nothing');
      }
      displayButtons();
    });
  }

  function displayButtons() {
    if (isAuthenticated()) {
      $loginBtn.text('Logout');
    } else {
      $loginBtn.text('Sign In / Register');
    }
  }


  handleAuthentication();

}