'use strict';
const knex = require('../config/knex');

async function getAllUsers() {
  return await knex('user').select('user_email').then(console.log);
}

module.exports = getAllUsers();
