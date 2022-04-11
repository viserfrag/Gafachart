var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/get', function(req, res, next) {
  res.status(200);
  res.json({
    status: 200,
    response: 'メッセージリストを返却',
    messages: strages
  });
});

module.exports = router;
