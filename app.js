const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter.js');
const newRouter = require('./routes/newRouter.js');
const messageRouter = require('./routes/messageRouter.js');

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/message', messageRouter);

const PORT = 3000;
app.listen(PORT, () => console.log('starting server'));
