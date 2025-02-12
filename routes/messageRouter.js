const db = require('../db.js');
const { Router } = require('express');
const messageRouter = Router();

messageRouter.get('/:messageIndex', (request, response) => {
    const { messageIndex } = request.params;
    const message = db.messages[Number(messageIndex)];
    response.render('../views/message.ejs', { message });
})

module.exports = messageRouter;