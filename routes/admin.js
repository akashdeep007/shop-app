const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const admincontroller=require('../controller/admin');

// /admin/add-product => GET
router.get('/add-product', admincontroller.getaddproducts);

// /admin/add-product => POST
router.post('/add-product',admincontroller.postaddproducts );

exports.routes = router;
exports.products = products;
