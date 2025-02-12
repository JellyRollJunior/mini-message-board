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

module.exports = indexRouter;
