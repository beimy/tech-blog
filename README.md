# The Rabbit Hole
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

 ## Table of Contents

- [Description](#overall-description)
- [Installation](#installation-instructions)
- [Server Setup](#server-setup)
- [Tests](#application-tests)
- [Contribution](#contribution-guidelines)
- [Contact Information](#contact-information)
- [License](#license)

 ## Overall Description 
 
Alpha release of The Rabbit Hole. 

Many of the core features of this project are still in active development, however, we are proud to present the official Alpha release of the site. <br/>
For now you are able to register, login, create posts and comments, and search the collection of posts and topics (mostly seed data for now) through a title search feature. 
The news letter is not actually a thing yet, so don't worry, we wont spam you if you forget to uncheck that little subscribe box. We would actually appreciate active use and feedback from anyone who is interested,
the general concept that got this project started was to have a place to share your learning adventures. Many of us have experienced what its like to "Go down the rabbit hole" when trying to find an effective solution to a pesky problem or even just simply being fascinated by a particular topic or kernel of information. This is a place to share your learning journeys, to teach others about what you learned along the way, and even just a convenient place to jot down what you learned so you don't forget. 

 Future planned features and add-ins currently include a more advanced search capability, streamlined user interface geared for both mobile and desktop users, the ability to follow specific users, and a customizable post feed to name a few. 

 User input and feedback is always appreciated, but if you find a bug or weird glitch please open an issue and provide as much detail as possible so that we can replicate the issue and debug. Alternatively you could propose a patch for whatever issue you find. 
 Don't forget that this site is in its Alpha release, and as such any posts you create here and now have the potential to be lost in the event of a major database update or restructuring. Although we do not expect this to happen its best to always expect the unexpected. Either way, thanks for visiting, have fun, and enjoy the site!

## Link to Deployed Application

  https://therabbithole-blog.herokuapp.com/

## Installation Instructions

If you would like to create your own site based off of this one or you would like to contribute to the project, follow the steps below to set-up a local instance of the site for yourself. The repository does contain seed data for testing including users, posts, comments, tags, categories, and relational tables. Do be aware Node.js and MySQL are required to make this project run locally. Nodemon and MySQL Workbench are recommended tools.


To install the dependencies you run:
```sh
npm i
```
If you plan on editing of the data, Nodemon is a helpful tool which can be downloaded with: 
```
npm install --save-dev nodemon
```
Please review <a href ="https://www.npmjs.com/package/nodemon">Nodemon</a> documentation if you are unfamiliar with the package.


 ## Server Setup
 
 Once you have the repository cloned and set up you will need to set up a local SQL server. 
 
Run the following command in the terminal of your choice at the root of your project starting with:
```
mysql -u root -p
``` 
Next, enter your password for MySQL. Once you are in your server run: 
```
source db/schema.sql

USE database_name_goes_here

quit
``` 
To seed the database with test data:
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
 

This application currently has no active test conditions. But if you'd like to make some, see the contribution guidelines below.

## Contribution guidelines

Contributors are welcome, just keep a few things in mind:

1. All contributions are to be made in a separate branch off develop or in an independent fork. Do not attempt to contribute to develop or main directly, it will be denied.

2. All contributions are subject to peer review, so please keep your code clean and readable, feel free to comment as much as you like, however most of those comments will likely be removed in the final version if your contributions are merged. Your code should speak for itself wherever possible. 

3. This project consists of a lot of asynchronous javascript, and for sake of consistency and debugging, please use the ES6 async syntax for all async functions. Any submissions that do not use this syntax will either be asked to refactor their code to this standard or they will be rewritten before being merged. 

Example: </br>
```
const myFunction = async() => {
  try{
    const response = await something()

    return something
  }catch(err){
    console.error(`error encountered in sample function: ${err}`)
  }
};
```

4. If there is an open issue that is not assigned, that means it is available to be worked on, so take your pick.

5. don't forget to have fun. If you love what you do, its not work.

## Contact Us

For the time being we do not have an inbox set up yet for receiving messages about this repository, however we can be reached through github or by opening an issue.


## license

  This project is licensed under the MIT license.
  For more information about this license and what it entails visit: https://opensource.org/licenses/MIT

