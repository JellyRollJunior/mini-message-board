const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controllers/indexController.js');

indexRouter.get('/', indexController.getMessages);
indexRouter.get('/message/:messageId', indexController.getMessageById);

module.exports = indexRouter;
