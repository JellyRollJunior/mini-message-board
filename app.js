const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter.js');
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, () => console.log('starting server'));
