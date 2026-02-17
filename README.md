# 🛒 E-Commerce API

Backend completo para tienda online con gestión de productos, carrito y pedidos.

## 🚀 Características

- 🛍️ Gestión completa de productos y categorías
- 🛒 Sistema de carrito persistente
- 📦 Gestión de pedidos y estados
- 💳 Simulación de pasarela de pago
- 🏗️ Arquitectura en capas (controllers/services/repositories)

## 🛠️ Tecnologías

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Swagger UI

## 📦 Instalación
```bash
npm install
cp .env.example .env
# Configura MongoDB URI
npm run dev
```

## 🔗 Endpoints principales
```
GET    /api/products         - Listar productos
POST   /api/products         - Crear producto (admin)
GET    /api/cart             - Ver carrito (requiere auth)
POST   /api/cart/add         - Añadir al carrito
POST   /api/orders           - Crear pedido
GET    /api/orders/:id       - Ver detalle de pedido
```

## 👤 Autor

Daniel Andrés Lozano Meriño
- GitHub: [@MrDanLee](https://github.com/MrDanLee)
- Email: daniel23lozano@gmail.com
