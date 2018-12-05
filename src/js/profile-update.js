export default function profileUpdate() {

  // Open file upload dialog on profile image click
  $('.profile-image-overlay').click(function() {
    $('#profile-image-upload-input').click();
  });

  // Show preview of uploaded file
  $('#profile-image-upload-input').change(function() {
    console.log('I was changed!');
    const reader = new FileReader();
    reader.addEventListener('load', e => {
      $('#profile-image').attr('src', e.target.result);
    });
    reader.readAsDataURL(this.files[0]);
  });

  // Save information to database
  $('.profile-save').click(function() {
    const enteredName = $('#player-name-input').val();
    if (enteredName.length > 22) return console.log('too long');
    if (enteredName.length < 5) return console.log('too short');
    console.log(enteredName);
  });

  // TODO: Style upload image preview to sizing that will eventually be shown
}

