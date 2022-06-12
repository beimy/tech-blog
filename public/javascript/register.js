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
            console.log(`It Worked! ${response}`);
            autoLogin(user_email, password);
          } else {
            console.log(`It didnt work.`)
          }
        }else{
          console.alert('Passwords do not match!')
        }
      } catch (err) {
        console.error(`error encountered in submit function: ${err}`)
      }
  }
    
}

async function autoLogin(email, password) {
  try {
    const response = await fetch('/user-login/validate', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {'Content-Type' : 'application/json'}
    });

    if(response.ok) {
      console.log('user found, logging in');
      autoNavigateToDash();
    } else {
      console.log('user not found');
    }
  } catch (err) {
    console.error(`error encountered in auto login:  ${err}`);
  }
};

async function autoNavigateToDash() {
  try {
    window.location.replace('/dashboard');
  } catch (err) {
    console.error(`error encoutered in autoNavigateToDash: ${err}`)
  }
}

$('#registerBtn').on('click', submitFunction);

