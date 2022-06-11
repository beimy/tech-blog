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
  const userEmail = $(this).siblings()[0].children[0].value.trim();
  const userPassword = $(this).siblings()[1].children[0].value.trim();

  loginFunction(userEmail, userPassword)
});
