const loginFunction = async(userEmail, userPassword) => {
  try {
    if(userEmail && userPassword){
      const email = userEmail;
      const password = userPassword;
      const response = await fetch('/user-login/validate', {
        method: 'post',
        body: JSON.stringify({
          email: email,
          password: password,
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

async function goToPostHandler(event) {
  $postId = $(this).attr("data-post_id");

  try {
    if($postId) {
      const response = await fetch(`/post/view/${$postId}`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
      });

      if(response.ok) {
        console.log('Found post by id');
        window.location.replace(`/post/view/${$postId}`);
      } else {
        alert("No post with that id found");
      }
    } else {
      console.error("Post id was not found");
    }
  } catch (err) {

  }
}

function collapseToggle() {
  $myCommentSection = $(this).parents("#comment-card").find("#commentSection");
  
  if($myCommentSection.hasClass("collapse")) {
    $myCommentSection.removeClass("collapse");
  } else {
    $myCommentSection.addClass("collapse");
  }
  console.log($myCommentSection);
}

async function commentFormHandler(event) {
  event.preventDefault();
  const comment_content = $(this).parents(".form-group").find("#comment-textarea").val();
  const post_id = $(this).data("post_id");

  console.log(post_id)
  
  if(comment_content) {
    try{
      const response = await fetch('/comments/', {
        method: 'POST',
        body: JSON.stringify({
          comment_content,
          post_id
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if(response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    alert('No comment text found');
  }
    
}
  
$(document).on("click", "#goToPost-btn", goToPostHandler);
$(document).on("click", "#comments-btn", collapseToggle);
$(document).on("click", "#sendComment-btn", commentFormHandler);

$('#login').on('click', function(e) {
  e.preventDefault();
  const userEmail = $(this).siblings()[0].children[0].value.trim();
  const userPassword = $(this).siblings()[1].children[0].value.trim();

  loginFunction(userEmail, userPassword)
});