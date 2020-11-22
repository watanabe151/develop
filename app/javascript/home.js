$(function() {
    $('.signup-btn').on('click', function(){
      $('#loginModalCenter').modal('hide');
      $('#signupModalCenter').modal();
    });

    $('.login-btn').on('click', function(){
      $('#signupModalCenter').modal('hide');
      $('#loginModalCenter').modal();
    });
  });

