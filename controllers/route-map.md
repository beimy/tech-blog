# Route Map
In the interest of making this map more human-readable the example urls's are all written out to reflect the test environment, not the production environment, since thats where this information is most likely to be referenced. To test any of these routes in the production environment replace localhost:3010 with the deployment URL.</br>
all routes in this document have been tested and verified as fully functional. 

* **Default/Home Route:**</br>
    Expected response: Renders Home Page</br>
    Method: GET</br>
    URL: http://localhost:3010/</br>

* **Default 404 Error Route:**</br>
  Expected Response: Renders 404 Page</br>
  Method: GET</br>
  URL: http://localhost:3010/{any invalid route}</br>

* **About Us Page:** </br>
    Request Requirements: none </br>
    Expected Response: Rendered About-Us Page </br>
    Method: GET <br>
    URL: http://localhost:3010/about </br>

* **User Dashboard:** </br>
    Request Requirements: valid session cookie with logged in user </br>
    Expected Response: Renders the user dashboard </br>
    Method: GET <br>
    URL: http://localhost:3010/dashboard </br>

---
## User Routes



### Tag Routes

* **GET all tags:** </br>
    Request Requirements: "none" </br>
    Expected Response: list of all tags with tag_id, tag_name, and tag_description </br>
    Method: GET <br>
    URL: http://localhost:3010/tag/ </br>

* **GET all Post_Tags:** </br>
    Request Requirements: none </br>
    Expected Response: list of all post tags and their relationships </br>
    Method: GET <br>
    URL: http://localhost:3010/tag/post </br>

* **Get all Comment_Tags:** </br>
    Request Requirements: none </br>
    Expected Response: all tags associated with comments and the comments data </br>
    Method: GET <br>
    URL: http://localhost:3010/tag/post </br>

    note: create comment/post - tag correlation routes do not log which user adds the tags at this time. Currently it will only log the time it was created.

* **Create new post-tag correlation:** </br>
    Request Requirements: JSON: post_id, tag_id </br>
    Expected Response: new post-tag relationship data </br>
    Method: POST <br>
    URL: http://localhost:3010/tag/post </br>
    Example Request Body: </br>
    ```
      {
	      "tag_id": 1,
	      "post_id": 10
      }
    ```

* **Create new comment-tag correlation:** </br>
    Request Requirements: JSON: post_id, tag_id </br>
    Expected Response: new post-tag relationship data </br>
    Method: POST <br>
    URL: http://localhost:3010/tag/comment </br>
    Example Request Body: </br>
    ```
      {
	      "tag_id": 1,
	      "comment_id": 10
      }
    ```


### Post Routes

* **Render Create Post Page:** </br>
    Request Requirements: none, </br>
    Expected Response: rendered page </br>
    Method: GET <br>
    URL: http://localhost:3010/post/create </br>
    Example: "" </br>

* **GET All Posts:** (no auth required) </br>
    Expected Response: All posts and associated data including comments, tags, comments tags, user id, category, ect. </br>
    Method: GET </br>
    URL: http://localhost:3010/post/ </br>

* **GET Posts By ID:** (no auth required) </br>
    Request Requirements: Post ID </br>
    Expected Response: Single post and all associated data where post_id = req.params.id </br>
    Method: GET <br>
    URL: http://localhost:3010/post/:id  </br>
    Example: http://localhost:3010/post/5 </br>

* **GET Post By User Id:** (withAuth is currently disabled for testing but will be activated for live deployment)</br>
    Request Requirements: User Id </br>
    Expected Response: All posts associated with one user and those posts associated data </br>
    Method: GET <br>
    URL: http://localhost:3010/post/user/:id </br>
    Example: http://localhost:3010/post/user/1 </br>

* **GET Posts by Tag ID:** </br>
    Request Requirements: Tag ID </br>
    Expected Response: all posts and post data related to the specific tag ID </br>
    Method: GET <br>
    URL: http://localhost:3010/post/tag/:id </br>
    Example: http://localhost:3010/post/tag/1 </br>

* **Create New Post:** </br>
    Request Requirements: Json Object, withAuth </br>
    Expected Response: (200) - success, (500) - fail </br>
    Method: POST <br>
    URL: http://localhost:3010/post/ </br>
    Example Request Body: </br>
    ```
      {
	      "post_title": "STRING",
	      "post_content": "TEXT",
	      "category_id": INTEGER,
	      "user_id": INTEGER
      }
    ```


* **Edit Post By ID:** (withAuth currently disabled for testing, will need to be reactivated before live deployment) </br>
  Request Requirements: Json Object:  </br>
  Expected response: res.status(200)/(500) success/fail </br>
  Method: PUT </br>
  URL: http://localhost:3010/post/:id </br>
  Example Request Body: </br>
  ```
  {
	"title": "STRING",
	"content": "TEXT",
	"category": INTEGER
  } 
  ```
  Notes: This only updates title, content, and category - tags, comments, and user data cannot be updated by the user through this route. 

* **Delete Post By ID:** </br>
    Request Requirements: post_id, withAuth </br>
    Expected Response: 200 - success, (500) - fail </br>
    Method: DELETE <br>
    URL: http://localhost:3010/post/:id </br>
    Example: http://localhost:3010/post/1 </br>


### Comment Routes

* **Get all comments:** </br>
    Request Requirements: none </br>
    Expected Response: json object of all comments with user, tag, and post data. </br>
    Method: GET <br>
    URL: http://localhost:3010/comments </br>

* **Get comments by user ID:** </br>
    Request Requirements: withAuth, will not work if user is not logged in with valid session cookie </br>
    Expected Response: All comment data associated with that user </br>
    Method: GET <br>
    URL: http://localhost:3010/comments/user </br>

* **Create New Comment:** </br>
    Request Requirements: withAuth, json body with new comment data </br>
    Expected Response: Success: new comment data, Fail: status 500 and error message </br>
    Method: POST <br>
    URL: http://localhost:3010/comments/ </br>
    Example Request Body: </br>
    ```
    {
      "comment_title": "STRING, allowNull is true",
      "comment_content": "TEXT allowNull is false",
      "post_id": "INTEGER allowNull is false"
    }
    ```

* **Edit a comment:** </br>
    Request Requirements: Json body </br>
    Expected Response: comment data </br>
    Method: PUT <br>
    URL: http://localhost:3010/comments/ </br>
    Example Request Body: </br>
    ```
    {
	    "comment_id": 5,
	    "comment_content": "This comment has been edited"
    }
    ```

* **Delete a comment:** </br>
    Request Requirements: json body with comment_id</br>
    Expected Response: success: 1, fail: 0 </br>
    Method: DELETE <br>
    URL:  http://localhost:3010/comments/ </br>
    Example Request Body: </br>
    ```
    {
	    "comment_id": 1
    }
    ```

### Login Routes

* **login page:** </br>
  Expected Response: Render login/sign-up Page </br>
  Method: GET </br>
  URL: http://localhost:3010/user-login</br>

* **Login Validation:**</br>
  Request Requirements: email, password | headers: { 'Content-Type': 'application/json' }</br>
  Expected response: if res.status(200) => userData + valid user session cookie | if res.status(400) => error, invalid credentials</br>
  Method: POST</br>
  URL: http://localhost:3010/user-login/validate</br>

* **Logout:**</br>
  Request Requirements: User session id</br>
  Expected Response: Delete session cookie or Edit session expiration time</br>
  Method: DELETE/PUT</br>
  URL: http://localhost/3010/user-login/logout</br>

* **Registration/sign-up page:**</br>
  Expected Response: Render registration page</br>
  Method: GET</br>
  URL: http://localhost/3010/user-login/register</br>

* **Register New User:**</br>
  Expected Response: if res.status(200) => new user added to db, redirect to dashboard</br>
  Request Requirements: username, email, password, </br>
  Method: POST</br>
  URL: http://localhost/3010/user-login/register</br>
 

---
## Admin Routes

* **Default Route:** </br>
    Expected Response: currently none, this is the default base URL to reach admin routes</br>
    Method: GET, POST, PUT, DELETE</br>
    URL: http://localhost:3010/admin</br>


* **Route Map Template:** </br>
    Request Requirements: "" </br>
    Expected Response: "" </br>
    Method: "" <br>
    URL: "" </br>
    Example: "" </br>