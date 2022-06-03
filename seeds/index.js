const seedUsers = require('./userSeeds');
const seedPosts = require('./postSeeds');
const seedTags = require('./tagSeeds');
const seedComments = require('./commentSeeds');
const seedCategories = require('./categorySeeds');
const seedPostTags = require('./post_tags');
const sequelize = require('../config/connection');

const seedAll = async() => {
  try{

    await sequelize.sync({ force: true});
    console.log('-----------SEED USERS-----------');
    await seedUsers();

    console.log('-----------SEED CATEGORIES-----------');
    await seedCategories();

    console.log('-----------SEED TAGS-----------');
    await seedTags();
    
    console.log('-----------SEED POSTS-----------');
    await seedPosts();

    console.log('-----------SEED COMMENTS-----------');
    await seedComments();

    console.log('-----------SEED POST-TAGS-------------')
    await seedPostTags();




    process.exit(0);
  }catch(err){
    console.error(`Unexpected error encountered in seeds index: ${err}`)
  }

}

seedAll();