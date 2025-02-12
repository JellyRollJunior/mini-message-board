const messages = require('../db.js');
const { Router } = require('express');
const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.render('../views/index.ejs', { messages: messages });
});

module.exports = indexRouter;
