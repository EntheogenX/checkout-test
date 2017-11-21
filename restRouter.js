const express = require('express');
const restRouter = express.Router();
const getInfo = require('./routes/getInfo');
const getItems = require('./routes/getItems');
const apiErrorHandler = require('./routes/errorHandler');

restRouter.use('/getInfo', getInfo);
restRouter.use('/getItems', getItems);
restRouter.use(apiErrorHandler);

module.exports = restRouter;
