function homeBtnHandler() {
    document.location.replace('/dashboard');
}

function aboutBtnHandler() {
    document.location.replace('/dashboard');
}

function exploreBtnHandler() {
    document.location.replace('/');
}

function notificationBtnHandler() {
    document.location.replace('notifications');
}

function accountBtnHandler() {
    document.location.replace('account');
}

function newPostBtnHandler() {
    document.location.replace('post/create');
}

$(document).on('click', '#home-btn', homeBtnHandler);
$(document).on('click', '#explore-btn', exploreBtnHandler);
$(document).on('click', '#notifications-btn', notificationBtnHandler);
$(document).on('click', '#my-account-btn', accountBtnHandler);
$(document).on('click', '#new-post-btn', newPostBtnHandler);
