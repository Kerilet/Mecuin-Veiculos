/* eslint-disable eol-last */
const Router = require('@koa/router')
const create = require('./controllers/create.js')
const del = require('./controllers/delete.js')
const findAll = require('./controllers/findAll.js')
const findOne = require('./controllers/findOne.js')
const update = require('./controllers/update.js')

const router = new Router();

router.get('/', findAll);

router.get('/:id', findOne);

router.delete('/:id', del);

router.post('/', create);

router.put('/:id', update);

module.exports = router;