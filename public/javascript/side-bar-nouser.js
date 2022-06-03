function homeBtnHandler() {
    document.location.replace('/user-login');
}

function exploreBtnHandler() {
    document.location.replace('/');
}

$(document).on('click', '#home-btn', homeBtnHandler);
$(document).on('click', '#explore-btn', exploreBtnHandler);
$(document).on('click', '#notifications-btn', homeBtnHandler);
$(document).on('click', '#my-account-btn', homeBtnHandler);
$(document).on('click', '#new-post-btn', homeBtnHandler);