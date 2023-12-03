const myRouter = require('express').Router();

const dashRoutes = require('./dash-routes.js');
const homeRoutes = require('./home-routes');
const apiRoutes = require("./api")

router.use('/', homeRoutes);
router.use('/dash', dashRoutes);
router.use('/api', apiRoutes);

module.exports = myRouter;