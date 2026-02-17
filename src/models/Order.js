const db = require('../config/database');
const Product = require('./Product');

class Order {
  static create(userId, orderData) {
    const { items, shippingAddress, paymentMethod } = orderData;

    const orderItems = items.map(item => {
      const product = Product.findById(item.productId);
      return {
        productId: item.productId,
        productName: product.name,
        quantity: item.quantity,
        price: product.price,
        subtotal: product.price * item.quantity
      };
    });

    const total = orderItems.reduce((sum, item) => sum + item.subtotal, 0);

    const order = {
      id: db.counters.orderId++,
      userId,
      items: orderItems,
      total,
      shippingAddress,
      paymentMethod,
      status: 'pending',
      paymentStatus: 'pending',
      createdAt: new Date()
    };

    db.orders.push(order);
    orderItems.forEach(item => Product.updateStock(item.productId, item.quantity));

    return order;
  }

  static findByUserId(userId) {
    return db.orders
      .filter(o => o.userId === userId)
      .sort((a, b) => b.createdAt - a.createdAt);
  }

  static findById(orderId, userId = null) {
    const order = db.orders.find(o => o.id === orderId);
    if (userId && order && order.userId !== userId) return null;
    return order;
  }
}

module.exports = Order;