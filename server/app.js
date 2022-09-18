var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./api/routes/index');
var usersRouter = require('./api/routes/users');
const { sequelize } = require('./models');

const app = express();
sequelize.sync();
/**
 * TODO: force: true 시 매 서버 실행 시 테이블 재생성
 * sequelize.sync({force: false})
 * .then(()=>{
 *    console.log('Connection Success');
 * })
 * .cathc((err=>{
 *    console.log(err);
 * }));
 *
 */

//Swagger API 라우팅
const { swaggerUi, specs } = require('./config/swagger/swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   //현재 view가 없어서 error생김. react 연동하면 해결될듯.
//   next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
