
var pass1="cool";

password=prompt('Please enter your password to view this page! ');

if (password==pass1)
  alert('Password Correct! Click OK to enter!');
else
   {
    alert('Password incorrect! You are being redirected!')
    window.location="http://www.google.com";
    } 

var main = function() {
  $('form').submit(function() {
    var comment = $('#comment').val();
    if(comment !== "") {
      var html = $('<li>').text(comment);
      $('.comments').append('<li></li>');
      $(html).prependTo('.comments');
      $('#comment').val = "";  
      $('form')[0].reset();  /*this resets the field of the form so that what the user just typed doesn't linger there but goes back to 
      a blank field. For more details, see: http://stackoverflow.com/questions/680241/resetting-a-multi-stage-form-with-jquery */


    }

    return false;

  });

};

$(document).ready(main);
