# Route Map

* **Default Route:**</br>
    Expected response: Renders Home Page</br>
    Method: GET</br>
    URL: http://localhost:3010/</br>

* **Default 404 Error Route:**</br>
  Expected Response: Renders 404 Page</br>
  Method: GET</br>
  URL: http://localhost:3010/{any invalid route}</br>

---
## User Routes

### Post Routes

* **Test Post-Page:** </br>
  URL: http://localhost:3010/post/post-test </br>

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

* **Create New Post:** </br>
    Request Requirements: Json Object: </br>
    ``{
	      "post_title": "STRING",
	      "post_content": "TEXT",
	      "category_id": INTEGER,
	      "user_id": INTEGER
      }``

    Expected Response: (200) - success, (500) - fail </br>
    Method: POST <br>
    URL: http://localhost:3010/post/ </br>





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