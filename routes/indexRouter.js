const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date(),
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date(),
    },
];

const { Router } = require('express');
const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.render('../views/index.ejs', { messages: messages });
});

indexRouter.get('/new', (req, res) => {
    res.render('../views/form.ejs');
});

indexRouter.post('/new', (req, res) => {
    const messageUser = req.body.messageUser;
    const messageText = req.body.messageText;
    messages.push({
        text: messageText,
        user: messageUser,
        added: new Date(),
    });
    res.redirect('/');
});

module.exports = indexRouter;
