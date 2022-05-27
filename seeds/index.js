const seedUsers = require('./userSeeds');
const sequelize = require('../config/connection');

const seedAll = async() => {
  await sequelize.sync({ force: true});
  console.log('--------SEED USERS--------');
  await seedUsers();

  process.exit(0);
}

seedAll();