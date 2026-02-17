const db = require('../config/database');
const Product = require('./Product');

class Cart {
  static findByUserId(userId) {
    return db.carts.find(c => c.userId === userId);
  }

  static getCartWithDetails(userId) {
    const cart = this.findByUserId(userId);
    if (!cart) return null;

    const itemsWithDetails = cart.items.map(item => {
      const product = Product.findById(item.productId);
      return {
        ...item,
        product,
        subtotal: product.price * item.quantity
      };
    });

    const total = itemsWithDetails.reduce((sum, item) => sum + item.subtotal, 0);
    return { items: itemsWithDetails, total };
  }

  static addItem(userId, productId, quantity) {
    const cart = this.findByUserId(userId);
    const existingItem = cart.items.find(i => i.productId === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity, addedAt: new Date() });
    }

    return cart;
  }

  static updateQuantity(userId, productId, quantity) {
    const cart = this.findByUserId(userId);
    const item = cart.items.find(i => i.productId === productId);
    if (item) item.quantity = quantity;
    return cart;
  }

  static removeItem(userId, productId) {
    const cart = this.findByUserId(userId);
    cart.items = cart.items.filter(i => i.productId !== productId);
    return cart;
  }

  static clearCart(userId) {
    const cart = this.findByUserId(userId);
    cart.items = [];
    return cart;
  }
}

module.exports = Cart;