const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');
//const co = require('co');
const ejs = require('koa-ejs');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

const routes = require('./routes');
const model = require('./db/model.js');

//mysql config
const Sequelize = require('sequelize');
const config = require('./db/config.js');

// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}));

//mysql init
model.sync();

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(routes());

app.on('error', function(err, ctx){
  console.log(err)
  logger.error('server error', err, ctx);
});


module.exports = app;