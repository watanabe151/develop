$(function() {
    // ログイン用モーダルで新規登録ボタンを押した際の処理
    $('.signup-btn').on('click', function(){
      $('#loginModalCenter').modal('hide');
      $('#signupModalCenter').modal();
    });

    // 新規登録用モーダルでログインボタンを押した際の処理
    $('.login-btn').on('click', function(){
      $('#signupModalCenter').modal('hide');
      $('#loginModalCenter').modal();
    });

    // 新規登録用モーダルで新規登録ボタンを押した際の処理
    $('.signup-form').on('click', function(){
      let isEmpty = false;
      jQuery('#signupInputUserName1, #signupInputEmail1, signupInputPassword1').each(function(){
        if(jQuery(this).val() === ''){
          var errorObject =  jQuery(this).attr('id');
          var errorObjectName = $('label[for=' + errorObject + ']').text();
          $('.error-messages').append(errorObjectName + '<span>を入力してください</span><p></p>');
          isEmpty = true;
        }
      });
      if(isEmpty){
        return false;
      }
      else{
        $('#signupModalCenter').modal('hide');
      }
    });

  });

