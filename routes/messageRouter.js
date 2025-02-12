const db = require('../db.js');
const { Router } = require('express');
const messageRouter = Router();

messageRouter.get('/:msg', (request, response) => {
    response.render('../views/message.ejs', { test: 1});
})

module.exports = messageRouter;