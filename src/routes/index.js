const express = require('express');
const router = express.Router();

let linkRouter = require('./link');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/link', linkRouter);

module.exports = router;
