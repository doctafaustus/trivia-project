export default function profileUpdate() {

  // Open file upload dialog on profile image click
  $('.profile-image-overlay').click(function() {
    $('#profile-image-upload-input').click();
  });

  // Show preview of uploaded file
  $('#profile-image-upload-input').change(function() {
    const reader = new FileReader();
    reader.addEventListener('load', e => {
      $('#profile-image').attr('src', e.target.result);
    });
    reader.readAsDataURL(this.files[0]);

    // Remove initial overlay
    $('.player-icon').removeClass('init-edit');
  });

  // Save information to database
  $('.profile-save').click(function() {
    const enteredName = $('#player-name-input').val();
    const validation = validateUsername(enteredName);
    if (validation) {
      console.log('show');
    };
  });

  // TODO: Show username validation messages in DOM
}

function validateUsername(username) {
  let errorMessage = '';
  if (username.length > 22) errorMessage = 'Username too long (max 22 characters)';
  if (username.length < 5) errorMessage = 'Username too short (min 5 characters)';
  return errorMessage;
}