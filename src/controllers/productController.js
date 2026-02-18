const Product = require('../models/Product');

const getProducts = async (req, res, next) => {
  try {
    const products = Product.findAll({
      category: req.query.category,
      minPrice: req.query.minPrice,
      maxPrice: req.query.maxPrice,
      search: req.query.search,
      sort: req.query.sort
    });
    res.json({ total: products.length, products });
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const product = Product.findById(parseInt(req.params.id));
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ product });
  } catch (error) {
    next(error);
  }
};

const getCategories = async (req, res, next) => {
  try {
    const categories = Product.getCategories();
    res.json({ categories });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProducts, getProduct, getCategories };