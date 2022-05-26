const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'jack',
    email: 'jack@bob.com',
    password: 'Iforgot!',
    isAdmin: true
  },
  {
    username: 'bigmoney',
    email: 'bigmoney@bob.com',
    password: 'Iforgot!',
    isAdmin: false
  },
  {
    username: 'skullz001',
    email: 'skulz001@bob.com',
    password: 'Iforgot!',
    isAdmin: false
  },
  {
    username: 'hardhead',
    email: 'hardhead@bob.com',
    password: 'Iforgot!',
    isAdmin: false
  },
  {
    username: 'razerguy',
    email: 'razerguy@bob.com',
    password: 'Iforgot!',
    isAdmin: false
  },
  {
    username: 'king_duck',
    email: 'quack@bob.com',
    password: 'Iforgot!',
    isAdmin: false
  },
  {
    username: 'marblezrsharp',
    email: 'marbles@bob.com',
    password: 'Iforgot!',
    isAdmin: false
  },
  {
    username: 'greencap',
    email: 'greencap@bob.com',
    password: 'Iforgot!',
    isAdmin: false
  },
  {
    username: 'charliebrown',
    email: 'charlieb@bob.com',
    password: 'Iforgot!',
    isAdmin: false
  },
  {
    username: 'alice',
    email: 'alice@bob.com',
    password: 'Iforgot!',
    isAdmin: false
  },
  {
    username: 'locke',
    email: 'locke@bob.com',
    password: 'Iforgot!',
    isAdmin: false
  },
  {
    username: 'shock',
    email: 'shock@bob.com',
    password: 'Iforgot!',
    isAdmin: false
  },
  {
    username: 'barrel',
    email: 'barrel@bob.com',
    password: 'Iforgot!',
    isAdmin: false
  },
  {
    username: 'kye123',
    email: 'kye123@bob.com',
    password: 'Iforgot!',
    isAdmin: false
  },
  {
    username: 'alice',
    email: 'alice@bob.com',
    password: 'Iforgot!',
    isAdmin: false
  }
];