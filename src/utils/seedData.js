const Product = require('../models/Product');

const initProducts = () => {
  const demoProducts = [
    { name: 'Laptop HP Pavilion', description: 'Laptop gaming i7, 16GB RAM, SSD 512GB', price: 899.99, stock: 15, category: 'Electronics' },
    { name: 'Mouse Logitech MX Master 3', description: 'Mouse inalambrico ergonomico', price: 99.99, stock: 50, category: 'Electronics' },
    { name: 'Teclado Mecanico Razer', description: 'Teclado RGB switches Cherry MX Blue', price: 129.99, stock: 30, category: 'Electronics' },
    { name: 'Monitor LG 27 4K', description: 'Monitor IPS 4K UHD con HDR', price: 449.99, stock: 12, category: 'Electronics' },
    { name: 'Auriculares Sony WH-1000XM5', description: 'Cancelacion de ruido activa', price: 349.99, stock: 25, category: 'Electronics' },
    { name: 'Webcam Logitech C920', description: 'Full HD 1080p con microfono', price: 79.99, stock: 40, category: 'Electronics' },
    { name: 'SSD Samsung 1TB', description: 'NVMe M.2 alta velocidad', price: 129.99, stock: 60, category: 'Electronics' },
    { name: 'Silla Gamer DXRacer', description: 'Ergonomica con soporte lumbar', price: 299.99, stock: 18, category: 'Furniture' }
  ];

  demoProducts.forEach(p => Product.create(p));
  console.log(`  8 productos de demostracion cargados`);
};

module.exports = { initProducts };