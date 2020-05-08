const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const shopcontroller=require('../controller/shop');

const router = express.Router();

router.get('/', shopcontroller.getproducts);

module.exports = router;
