const Order = require('../models/Order');
const Cart = require('../models/Cart');

const createOrder = async (req, res, next) => {
  try {
    const { shippingAddress, paymentMethod } = req.body;

    if (!shippingAddress || !paymentMethod) {
      return res.status(400).json({ error: 'Direccion de envio y metodo de pago son requeridos' });
    }

    const cart = Cart.findByUserId(req.user.id);
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ error: 'El carrito esta vacio' });
    }

    const order = Order.create(req.user.id, {
      items: cart.items,
      shippingAddress,
      paymentMethod
    });

    Cart.clearCart(req.user.id);

    res.status(201).json({ message: 'Pedido creado exitosamente', order });
  } catch (error) {
    next(error);
  }
};

const getOrders = async (req, res, next) => {
  try {
    const orders = Order.findByUserId(req.user.id);
    res.json({ total: orders.length, orders });
  } catch (error) {
    next(error);
  }
};

const getOrder = async (req, res, next) => {
  try {
    const order = Order.findById(parseInt(req.params.id), req.user.id);
    if (!order) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }
    res.json({ order });
  } catch (error) {
    next(error);
  }
};

module.exports = { createOrder, getOrders, getOrder };