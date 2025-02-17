const { Router } = require('express');
const indexRouter = Router();
const { getMessages } = require('../controllers/indexController.js');

indexRouter.get('/', getMessages);

module.exports = indexRouter;
