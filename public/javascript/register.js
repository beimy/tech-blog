const registerBtn = document.getElementById('registerBtn');
const email = document.getElementById('email');
const userName = document.getElementById('username');
const pass1 = document.getElementById('password1');
const pass2 = document.getElementById('password2');

const submitFunction = async() => {
  try {

    const user_email = email.value;
    const username = userName.value;
    const password1 = pass1.value;
    const password2 = pass2.value;

    if( password1 === password2){
      const password = password1;
      console.log('passwords are good');
      const response = await fetch('/user-login/register', {
        method: 'post',
        body: JSON.stringify({
          user_email,
          username,
          password,
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response)
    }else{
      console.log('passwords dont match')
    }

    if(response.ok){
      console.log(`It Worked! ${response}`)
    } else {
      console.log(`It didnt work.`)
    }
  } catch (err) {
    console.error(`error encountered in submit function: ${err}`)
  }
}

$('#registerBtn').on('click', submitFunction);

