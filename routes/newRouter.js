const { Router } = require('express');
const newRouter = Router();
const { addMessage } = require('../db.js');

newRouter.get('/', (req, res) => {
    res.render('../views/form.ejs');
});

newRouter.post('/', (req, res) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;

    addMessage(messageText, messageUser);
    res.redirect('/');
});

module.exports = newRouter;
