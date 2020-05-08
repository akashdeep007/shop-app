const Products = require('../models/products');

module.exports.getproducts = (req, res, next) => {
    const products = Products.getall();
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }