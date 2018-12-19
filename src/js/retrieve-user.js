export default function retrieveUser(idToken) {

  $.ajax({
    type: 'POST',
    url: '/auth0-user',
    data: { idToken },
  })
  .then((data) => {
    console.log('success!', data);
  });

}