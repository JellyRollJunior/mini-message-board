const db = require('../db.js');
const { Router } = require('express');
const messageRouter = Router();
const { getMessageByIndex } = require('../controllers/messageController.js');

messageRouter.get('/:messageIndex', getMessageByIndex);

module.exports = messageRouter;
