# Route Map

* **default route:**</br>
    Expected response: Renders Home Page</br>
    Method: GET</br>
    URL: http://localhost:3010/</br>

* **default 404 error route:**</br>
  Expected Response: Renders 404 Page</br>
  Method: GET</br>
  URL: http://localhost:3010/{any invalid route}</br>

---
## User Routes

### Post Routes

* GET All Posts (not user specific)
    Expected Response: Search posts by ID
    Method: GET
    URL: 


* /posts/  ==> GET all posts and posts data
* /posts/{post_id} ==> GET posts by id
* /posts/


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
