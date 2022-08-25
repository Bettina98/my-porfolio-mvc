const express = require('express');
const app = express();
const port = 3000;
const mainRouter = require('./routes/main');

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/', mainRouter);

app.listen(port, () => console.log('Server running in http://localhost:' + port));