const Router = require('@koa/router')
const colors = require('./colors/routes')
const brands = require('./brands/routes')
const models = require('./models/routes')
const versions = require('./versions/routes')
const gearshifts = require('./gearshifts/routes')

const router = new Router();

router.use('/colors', colors.routes(), colors.allowedMethods());
router.use('/brands', brands.routes(), brands.allowedMethods());
router.use('/models', models.routes(), models.allowedMethods());
router.use('/versions', versions.routes(), versions.allowedMethods());
router.use('/gearshifts', gearshifts.routes(), gearshifts.allowedMethods());

module.exports = router;
