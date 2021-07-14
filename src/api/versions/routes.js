/* eslint-disable eol-last */
const Router = require('@koa/router');
const create = require('./controllers/create');
const del = require('./controllers/delete');
const findAll = require('./controllers/findAll');
const findOne = require('./controllers/findOne');
const update = require('./controllers/update');

const router = new Router();

router.get('/', findAll);

router.get('/:id', findOne);

router.delete('/:id', del);

router.post('/', create);

router.put('/:id', update);

module.exports = router;