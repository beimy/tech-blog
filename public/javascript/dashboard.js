const getPostData = async() => {
  try {
    const userPosts = await fetch('/post/user', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    });
    const posts = JSON.parse(userPosts)
    console.log(posts)

  } catch (err) {
    console.error(err)
  }
}

getPostData();