/* eslint-disable no-console */
const Koa = require('koa')
const koaBody = require('koa-body')
const router = require('./api/routes')

const app = new Koa();

app.use(koaBody({ multipart: true, uploadDir: '.' }));

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3002, () => {
  console.log('running on http://localhost:3002');
});
