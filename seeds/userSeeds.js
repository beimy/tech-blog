const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    username: 'jack',
    email: 'jack@bob.com',
    about: 'This is where the users about information goes.',
    password: 'Iforgot!',
    is_admin: true
  },
  {
    username: 'bigmoney',
    email: 'bigmoney@bob.com',
    about: 'This is where the users about information goes.',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'skullz001',
    email: 'skulz001@bob.com',
    about: 'This is where the users about information goes.',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'hardhead',
    email: 'hardhead@bob.com',
    about: 'This is where the users about information goes.',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'razerguy',
    email: 'razerguy@bob.com',
    about: 'This is where the users about information goes.',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'king_duck',
    email: 'quack@bob.com',
    about: 'This is where the users about information goes.',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'marblezrsharp',
    email: 'marbles@bob.com',
    about: 'This is where the users about information goes.',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'greencap',
    email: 'greencap@bob.com',
    about: 'This is where the users about information goes.',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'charliebrown',
    email: 'charlieb@bob.com',
    about: 'This is where the users about information goes.',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'alice',
    email: 'alice@bob.com',
    about: 'This is where the users about information goes.',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'locke',
    email: 'locke@bob.com',
    about: 'This is where the users about information goes.',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'shock',
    email: 'shock@bob.com',
    about: 'This is where the users about information goes.',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'barrel',
    email: 'barrel@bob.com',
    about: 'This is where the users about information goes.',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'kye123',
    email: 'kye123@bob.com',
    about: 'This is where the users about information goes.',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'kye1234',
    email: 'kye1234@bob.com',
    about: 'This is where the users about information goes.',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'kye12345',
    email: 'kye12345@bob.com',
    about: 'This is where the users about information goes.',
    password: 'Iforgot!',
    is_admin: false
  },

];

const userSeeds = () => User.bulkCreate(userData, {individualHooks: true});
module.exports = userSeeds;