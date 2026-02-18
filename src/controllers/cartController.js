const Cart = require('../models/Cart');
const Product = require('../models/Product');

const getCart = async (req, res, next) => {
  try {
    const cart = Cart.getCartWithDetails(req.user.id);
    res.json({ cart });
  } catch (error) {
    next(error);
  }
};

const addToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json({ error: 'ProductId and quantity are required' });
    }

    const product = Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    if (quantity > product.stock) {
      return res.status(400).json({ error: 'Insufficient stock' });
    }

    Cart.addItem(req.user.id, productId, quantity);
    const cart = Cart.getCartWithDetails(req.user.id);

    res.json({ message: 'Product added to cart', cart });
  } catch (error) {
    next(error);
  }
};

const updateCartItem = async (req, res, next) => {
  try {
    const { quantity } = req.body;
    const productId = parseInt(req.params.productId);

    const product = Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    if (quantity > product.stock) {
      return res.status(400).json({ error: 'Insufficient stock' });
    }

    Cart.updateQuantity(req.user.id, productId, quantity);
    const cart = Cart.getCartWithDetails(req.user.id);

    res.json({ message: 'Quantity updated', cart });
  } catch (error) {
    next(error);
  }
};

const removeFromCart = async (req, res, next) => {
  try {
    const productId = parseInt(req.params.productId);
    Cart.removeItem(req.user.id, productId);
    const cart = Cart.getCartWithDetails(req.user.id);
    res.json({ message: 'Product removed from cart', cart });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCart, addToCart, updateCartItem, removeFromCart };