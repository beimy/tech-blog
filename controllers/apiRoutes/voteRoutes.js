const router = require('express').Router();

//GET all votes by post ID - used to generate view content if we decide to use up/down votes on comments

//GET all votes by user ID - used to add all votes to user dashboard if we want to do that.

//GET all votes by comment ID - if we decide to use upvotes on comments

//POST new vote - requires user auth - one vote per comment/post per user. 

//DELETE vote - allow user to remove their vote, this will allow them to add a new vote to the comment/post 

module.exports = router;