const mongoose = require('mongoose');
const response = require('../models/SurveyResponse');


exports.getResponseFromResponseID= (req, res, next) => {
    response.findById()
      .then(products => {
        res.render('shop/product-list', {
          prods: products,
          pageTitle: 'All Products',
          path: '/products'
        });
      })
      .catch(err => {
        console.log(err);
      });
  };