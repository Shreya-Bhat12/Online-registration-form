$(document).ready(function() {
  $('#registrationForm').on('submit', function(e) {
    let phone = $('#phone').val();

    // Simple phone validation
    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      e.preventDefault();
    }
  });
});
