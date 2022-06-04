const loginFunction = async(userEmail, userPassword) => {
  try{
    if(userEmail && userPassword){
      const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({userEmail, userPassword}),
        headers: {'Content-Type': 'application/json'}
      });

      if(response.ok){
        document.location.replace('/');
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
