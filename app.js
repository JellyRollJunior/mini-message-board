const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter.js');
const newRouter = require('./routes/newRouter.js');

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/new', newRouter);

const PORT = 3000;
app.listen(PORT, () => console.log('starting server'));
