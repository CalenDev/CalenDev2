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

const db = require('../../models');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  //db에서 가져오기
  res.send('test');
});

module.exports = router;
