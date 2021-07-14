/* eslint-disable eol-last */
const Router = require('@koa/router')
const create = require('./controllers/create.js.js.js.js.js')
const del = require('./controllers/delete.js.js.js.js.js')
const findAll = require('./controllers/findAll.js.js.js.js.js')
const findOne = require('./controllers/findOne.js.js.js.js.js')
const update = require('./controllers/update.js.js.js.js.js')

const router = new Router();

router.get('/', findAll);

router.get('/:id', findOne);

router.delete('/:id', del);

router.post('/', create);

router.put('/:id', update);

module.exports = router;