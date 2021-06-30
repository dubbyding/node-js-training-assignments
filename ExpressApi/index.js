const express = require('express');
const morgan = require('morgan');

const isLoggedIn = require('./middlewares/isLoggedIn');

const app = express();

app.use(morgan('dev'));

app.use(isLoggedIn);

app.use((req, res, next) => {
  console.log(req.college);
  res.json({
    msg: 'The requested value from isLoggedIn',
    data: req.college,
  });
});

app.get('/', (req, res, next) => {
  res.json({
    sts: 'You are in',
  });
});

app.get('/info/:name', (req, res, next) => {
  res.json({
    msg: 'You are in',
    name: req.params,
  });
});

app.listen(8000, (err, done) => {
  if (err) {
    console.log('Error Listening to the server');
  } else {
    console.log('Server Listening at port 8000');
  }
});
