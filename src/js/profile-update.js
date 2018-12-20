import { fstat } from "fs";

export default function profileUpdate() {

  let uploadedImage;

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
    uploadedImage = this.files[0];

    // Remove initial overlay
    $('.player-icon').removeClass('init-edit');
  });

  // Save information to database
  $('.profile-save').click(function() {
    $('.profile-validation').text('');
    const enteredName = $('#player-name-input').val();
    const enteredPhoto = $('#profile-image-upload-input').val();
    const validation = validate({enteredName, enteredPhoto});

    const fd = new FormData();
    fd.append('player-name', enteredName);
    fd.append('profile-image', uploadedImage);


    // TODO: Cleanup fd call
    if (validation) {
      $('.profile-validation').text(validation);
    } else {
      $.ajax({
        type: 'POST',
        url: '/update-profile',
        cache: false,
        contentType: false,
        processData: false,
        data: fd
      })
      .then(data => {
        console.log(data)
      });
      console.log('Submitting to server');
    }
  });

}

function validate({ enteredName, enteredPhoto }) {
  let errorMessage = '';
  if (enteredName.length > 22) errorMessage = 'Username too long (max 22 characters)';
  if (enteredName.length < 5) errorMessage = 'Username too short (min 5 characters)';
  if (!enteredPhoto) errorMessage = 'Please upload a profile image';
  
  return errorMessage;
}