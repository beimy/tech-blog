const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    username: 'jack',
    email: 'jack@bob.com',
    password: 'Iforgot!',
    is_admin: true
  },
  {
    username: 'bigmoney',
    email: 'bigmoney@bob.com',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'skullz001',
    email: 'skulz001@bob.com',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'hardhead',
    email: 'hardhead@bob.com',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'razerguy',
    email: 'razerguy@bob.com',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'king_duck',
    email: 'quack@bob.com',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'marblezrsharp',
    email: 'marbles@bob.com',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'greencap',
    email: 'greencap@bob.com',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'charliebrown',
    email: 'charlieb@bob.com',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'alice',
    email: 'alice@bob.com',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'locke',
    email: 'locke@bob.com',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'shock',
    email: 'shock@bob.com',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'barrel',
    email: 'barrel@bob.com',
    password: 'Iforgot!',
    is_admin: false
  },
  {
    username: 'kye123',
    email: 'kye123@bob.com',
    password: 'Iforgot!',
    is_admin: false
  },

];

const userSeeds = () => User.bulkCreate(userData);
module.exports = userSeeds;