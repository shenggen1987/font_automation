var express = require('express');
var router = express.Router();

var Index = require('../controller/index');
router.get('/', Index.Index);
module.exports = router;