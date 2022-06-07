async function logout() {
    try {
        console.log('trying to log out')
        const response = await fetch('/user-login/logout', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        });
    
        if(response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    } catch (err) {
        console.error(`Error occured in logout handler: ${err}`);
    }
    
}

// $('#logout-btn').on('click', logout);
document.querySelector('#logout-confirm-btn').addEventListener('click', logout);
