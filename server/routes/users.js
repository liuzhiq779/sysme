var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    msg:'后端接口测试数据，测试接口'
  })
});

module.exports = router;
