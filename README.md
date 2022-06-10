# The Rabbit Hole Tech Blog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

 ## Table of Contents

- [Description](#overall-description)
- [Installation](#installation-instructions)
- [Instructions/How To Use](#instructions/how-to-use)
- [License](#license)
- [Contribution](#contribution-guidelines)
- [Tests](#application-tests)
- [Contact Information](#contact-information)



 ## Overall Description 
 - - - 

A fullstack development application that creates a seeded database and fully rendered front end display for a Tech Blog application. This application utilizes Object-Relational Mapping to interact with the database, while the file formatting is done implementing Model View Controller settings. The application is built using best practices from the RESTful CRUD operations concept. It supports account creation with secure password hashing and storage  with authentication through regular expressions, and the ability to login. Users while logged in have the ability to create, edit, and delete their own posts, as well as being able to view posts made by other users. Furthermore, a User is able to create, edit and delete comments they have made on posts. This application was created using MySQL, which utilizes Node.js, MySQL2, Express.js, handlebars, Nodemon, and Sequelize.

 ![Alt text]()

## Link to Deployed Application

 ## Installation Instructions
 - - -
To install the dependencies you run:
```sh
npm install
```
If you plan on editing of the data, Nodemon is a helpful tool which can be downloaded with: 
```
npm install --save-dev nodemon
```
Please review <a href ="https://www.npmjs.com/package/nodemon">Nodemon</a> documentation if you are unfamiliar with the package.


 ## Usage
 - - -
 
Run the following command at the root of your project starting with:
```
mysql -u root -p
``` 
Next, enter your password for MySQL. Once you are in your server run: 
```
SOURCE db/schema.sql
quit
``` 
Then run:
```
npm run seed
```
Finally, choose between running: 
```
npm start
OR
nodemon server.js
```
You can download <a href="https://insomnia.rest/download">Insomnia</a> to manipulate/test the data with the GET, POST, PUT, DELETE request.

 ## Application Tests
 - - -

no tests conditions are currently active

## license
  - - - 
  This project is licensed under the MIT license.
  For more information about this license and what it entails visit: https://opensource.org/licenses/MIT


