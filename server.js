require('dotenv').config();
const app = require('./src/app');
const { initProducts } = require('./src/utils/seedData');

const PORT = process.env.PORT || 3001;

initProducts();

app.listen(PORT, () => {
  console.log('===========================================');
  console.log('  E-COMMERCE API - By Daniel Lozano');
  console.log('===========================================');
  console.log(`  Servidor: http://localhost:${PORT}`);
  console.log('  Endpoints:');
  console.log('    POST /api/auth/register');
  console.log('    POST /api/auth/login');
  console.log('    GET  /api/products');
  console.log('    GET  /api/cart');
  console.log('    POST /api/orders');
  console.log('===========================================');
});