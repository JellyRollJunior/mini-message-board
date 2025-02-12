const { Router } = require('express');
const newRouter = Router();
const messages = require('../db.js');

newRouter.get('/', (req, res) => {
    res.render('../views/form.ejs');
});

newRouter.post('/', (req, res) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;

    messages.push({
        text: messageText,
        user: messageUser,
        added: new Date(),
    });
    res.redirect('/');
});

module.exports = newRouter;