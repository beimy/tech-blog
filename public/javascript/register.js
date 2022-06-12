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
          const response = await fetch('/user-login/register', {
            method: 'post',
            body: JSON.stringify({
              email: user_email,
              username: username,
              password: password,
            }),
            headers: { 'Content-Type': 'application/json' }
          });

          if(response.ok){
             autoLogin(user_email, password);
          } else {
            console.log(`It didn't work.`)
          }
        }else{
          window.alert('Passwords do not match!')
        }
      } catch (err) {
        console.error(`error encountered in submit function: ${err}`)
      }
  }
    
}


const autoLogin = async(e, p) => {
  try {
    const email = e;
    const password = p;

    const response = await fetch('/user-login/validate', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: {'Content-Type' : 'application/json'}
    });

    if(response.ok) {
      window.alert('Thank you for registering, you are now being redirected to your dashboard.');
      window.location.replace('/dashboard');
    } else {
      window.alert('user not found');
    }
  } catch (err) {
    console.error(`error encountered in auto login:  ${err}`);
  }
};

$('#registerBtn').on('click', submitFunction);

