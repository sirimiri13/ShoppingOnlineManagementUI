var express = require('express');
var router = express.Router();

/* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'index' });
  });
  router.get('/logout', function(req, res, next) {
    res.render('index', { title: 'index' });
  });
  router.get('/home', function(req, res, next) {
    res.render('index', { title: 'Thống kê' });
  });
  router.get('/login', function(req, res, next) {
    res.render('login', { title: 'login' });
  });

  router.get('/category', function(req, res, next) {
    res.render('category', { title: 'category' });
  });

  router.get('/user', function(req, res, next) {
    res.render('user', { title: 'user' });
  });

  router.get('/order', function(req, res, next) {
    res.render('order', { title: 'oder' });
  });
  router.get('/product', function(req, res, next) {
    res.render('product', { title: 'product' });
  });
  router.get('/store', function(req, res, next) {
    res.render('store', { title: 'store' });
  });

module.exports = router;
