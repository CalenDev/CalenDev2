'use strict';
const knex = require('../config/knex');

async function getAllUsers() {
  return await knex('user').select('user_email');
}

module.exports = getAllUsers();
