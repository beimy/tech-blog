const loginFunction = async(userEmail, userPassword) => {
    try{
      if(userEmail && userPassword){
        const email = userEmail;
        const password = userPassword;
        const response = await fetch('/user-login/validate', {
          method: 'post',
          body: JSON.stringify({
            email,
            password,
          }),
          headers: { 'Content-Type': 'application/json' }
        });
  
        if(response.ok){
          document.location.replace('/dashboard');
        }else{
          alert('Invalid Credentials')
        }
      } 
    }catch(err){
      console.error(`Unexpected error encountered in main.js loginFunction: ${err}`)
    }
  
  };
  
  $('#login').on('click', function() {
    //this is an example of how the event listenersa should look, it may need to be edited to actually grab the text of the correct input fields.
    const userEmail = $(this).siblings()[0].children[0].value.trim();
    const userPassword = $(this).siblings()[1].children[0].value.trim();
  
    loginFunction(userEmail, userPassword)
  });