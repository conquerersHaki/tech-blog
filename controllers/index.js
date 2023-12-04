const myRouter = require('express').Router();

const dashRoutes = require('./dash-routes.js');
const homeRoutes = require('./home-routes');
const apiRoutes = require("./api")

myRouter.use('/', homeRoutes);
myRouter.use('/dash', dashRoutes);
myRouter.use('/api', apiRoutes);

module.exports = myRouter;