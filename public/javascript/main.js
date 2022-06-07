const loginFunction = async(userEmail, userPassword) => {
  try {
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

async function goToPostHandler(event) {
  $postId = $(this).attr("data-post_id");

  try {
    if($postId) {
      const response = await fetch(`/post/${$postId}`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
      });

      if(response.ok) {
        console.log('Found post by id');
        alert(`Would go to page at post id: ${$postId}`);
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
  
$(document).on("click", "#goToPost-btn", goToPostHandler);
$(document).on("click", "#comments-btn", collapseToggle);

$('#login').on('click', function() {
  //this is an example of how the event listenersa should look, it may need to be edited to actually grab the text of the correct input fields.
  const userEmail = $(this).siblings()[0].children[0].value.trim();
  const userPassword = $(this).siblings()[1].children[0].value.trim();

  loginFunction(userEmail, userPassword)
});