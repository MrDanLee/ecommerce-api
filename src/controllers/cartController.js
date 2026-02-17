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
      return res.status(400).json({ error: 'ProductId y quantity son requeridos' });
    }

    const product = Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    if (quantity > product.stock) {
      return res.status(400).json({ error: 'Stock insuficiente' });
    }

    Cart.addItem(req.user.id, productId, quantity);
    const cart = Cart.getCartWithDetails(req.user.id);

    res.json({ message: 'Producto añadido al carrito', cart });
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
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    if (quantity > product.stock) {
      return res.status(400).json({ error: 'Stock insuficiente' });
    }

    Cart.updateQuantity(req.user.id, productId, quantity);
    const cart = Cart.getCartWithDetails(req.user.id);

    res.json({ message: 'Cantidad actualizada', cart });
  } catch (error) {
    next(error);
  }
};

const removeFromCart = async (req, res, next) => {
  try {
    const productId = parseInt(req.params.productId);
    Cart.removeItem(req.user.id, productId);
    const cart = Cart.getCartWithDetails(req.user.id);
    res.json({ message: 'Producto eliminado del carrito', cart });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCart, addToCart, updateCartItem, removeFromCart };