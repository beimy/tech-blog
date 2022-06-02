
async function logout() {
    const response = await fetch('/user-login/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if(response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

// $('#logout-btn').on('click', logout);
document.querySelector('#logout-btn').addEventListener('click', logout);