const { Router } = require('express');
const newRouter = Router();
const { addNewMessage } = require('../controllers/newController.js');

newRouter.get('/', (req, res) => {
    res.render('form');
});

newRouter.post('/', addNewMessage);

module.exports = newRouter;
