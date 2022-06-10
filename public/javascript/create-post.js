async function newPostFormHandler(event) {
    event.preventDefault();

    const post_title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('textarea[name="post-body"]').value;

    console.log(post_title);
    console.log(post_content);
    
    if(post_title && post_content){
        const response = await fetch("/post/", {
            method: 'POST',
            body: JSON.stringify({
                post_title,
                post_content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    } else {
        alert('Please fill out at least the title and body forms.');
    }
}

document.querySelector('#create-post').addEventListener('click', newPostFormHandler);