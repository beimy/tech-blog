async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if(username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
  
        //check response status
        if(response.ok) {
            console.log('success');
            autoLogin(email, password, username);
        } else {
            alert(response.statusText);
        }
    }
}
  
// async function loginFormHandler(event) {
//   event.preventDefault();

//   const email = document.querySelector('#email-login').value.trim();
//   const password = document.querySelector('#password-login').value.trim();
 
//   if (email && password) {
//     const response = await fetch('/user-login/validate', {
//       method: 'post',
//       body: JSON.stringify({
//         email,
//         password
//       }),
//       headers: { 'Content-Type': 'application/json' }
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert("No user found with that login info");
//     }
//   }
// }

const loginFormHandler = async(event) => {
  try {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    const response = await fetch('/user-login/validate', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    console.log(response);
    if(response.ok){
      document.location.replace('/dashboard');
    } else {
      window.alert('Invalid login credentials')
    }

  } catch (err) {
    console.error(`Error encountered in login handler: ${err}`)
  }
}

async function autoLogin(email, password, username) {
  
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
      alert(`Thank you for signing up ${username}, welcome to your dashboard!`)
    } else {
      alert(response.statusText);
    }
  }
}

function toggleSignUp(event) {
  $(".signup-form").removeClass("hidden");
  $("#signup-toggle").addClass("hidden");


  $(".login-form").addClass("hidden");
  $("#login-toggle").removeClass("hidden");
}

function toggleLogin(event) {
  $(".login-form").removeClass("hidden");
  $("#login-toggle").addClass("hidden");

  $(".signup-form").addClass("hidden");
  $("#signup-toggle").removeClass("hidden");
}
  

document.querySelector('#signup-toggle').addEventListener('click', toggleSignUp);
document.querySelector('#login-toggle').addEventListener('click', toggleLogin);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);