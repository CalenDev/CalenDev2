/**
 * @swagger
 *  /users:
 *    get:
 *      tags:
 *      - users
 *      description: 모든 사용자 조회
 *      produces:
 *      - application/json
 *      responses:
 *       200:
 *        description: 유저 검색 성공
 */

var express = require('express');
const knex = require('../../config/knex');
const knex2 = require('../../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  //db에서 가져오기
  // const list = await knex('user').select('*').then(console.log);
  const list = knex2;
  console.log(list);
  res.send(list);
});

module.exports = router;
