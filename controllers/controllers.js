var express = require('express');
var router = express.Router();

//model

router.get('/', function(req, res) {
  res.send('hello get');
});

router.post('/api/product', function(req, res) {
  res.send('hello post ');
});

router.put('/api/product/:id', function(req, res) {
  res.send('hello put');
});

router.delete('/api/product/:id', function(req, res) {
  res.send('hello delete');
});

module.exports = router;
