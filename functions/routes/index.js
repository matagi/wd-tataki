var express = require('express');
const functions = require('firebase-functions');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node.js お前を見ている。' });
});

module.exports = router;