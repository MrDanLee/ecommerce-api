const Product = require('../models/Product');

const initProducts = () => {
  const demoProducts = [
    { name: 'HP Pavilion Laptop', description: 'Gaming laptop with Intel i7, 16GB RAM, 512GB SSD', price: 899.99, stock: 15, category: 'Electronics' },
    { name: 'Logitech MX Master 3', description: 'Wireless ergonomic mouse', price: 99.99, stock: 50, category: 'Electronics' },
    { name: 'Razer Mechanical Keyboard', description: 'RGB keyboard with Cherry MX Blue switches', price: 129.99, stock: 30, category: 'Electronics' },
    { name: 'LG 27" 4K Monitor', description: '27-inch 4K UHD IPS monitor with HDR', price: 449.99, stock: 12, category: 'Electronics' },
    { name: 'Sony WH-1000XM5', description: 'Premium headphones with active noise cancellation', price: 349.99, stock: 25, category: 'Electronics' },
    { name: 'Logitech C920 Webcam', description: 'Full HD 1080p webcam with stereo microphone', price: 79.99, stock: 40, category: 'Electronics' },
    { name: 'Samsung 1TB SSD', description: 'NVMe M.2 SSD with high-speed read', price: 129.99, stock: 60, category: 'Electronics' },
    { name: 'DXRacer Gaming Chair', description: 'Ergonomic gaming chair with lumbar support', price: 299.99, stock: 18, category: 'Furniture' }
  ];

  demoProducts.forEach(p => Product.create(p));
  console.log(`  ${demoProducts.length} demo products loaded`);
};

module.exports = { initProducts };