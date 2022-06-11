const submitFunction = async(e) => {
    e.preventDefault();

    const user_email = $('#email').val();
    const username = $('#username').val();
    const password1 = $('#pass1').val();
    const password2 = $('#pass2').val();

    if(user_email && username && password1 && password2) {
      try {
        if( password1 === password2 ){
          const password = password1;
          console.log('passwords are good');
          const response = await fetch('/user-login/register', {
            method: 'post',
            body: JSON.stringify({
              email : user_email,
              username,
              password,
            }),
            headers: { 'Content-Type': 'application/json' }
          });

          console.log(response)
          if(response.ok){
            console.log(`It Worked! ${response}`)
          } else {
            console.log(`It didnt work.`)
          }
          
        }else{
          console.log('passwords dont match')
        }
      } catch (err) {
        console.error(`error encountered in submit function: ${err}`)
      }
  }
    
}

$('#registerBtn').on('click', submitFunction);

