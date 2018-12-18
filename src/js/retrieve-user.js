export default function retrieveUser(idToken) {

  $.ajax({
    type: 'POST',
    url: '/auth0-user',
    data: { idToken: idToken },
  })
  .then(() => {
    console.log('success!');
  });

}