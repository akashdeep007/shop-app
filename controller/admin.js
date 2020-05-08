const Products = require('../models/products');

module.exports.getaddproducts = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

  module.exports.postaddproducts = (req, res, next) => {
    const productinstance=new Products(req.body.title);
    productinstance.save();
    res.redirect('/');
  }

