# 🛒 E-Commerce API

Complete backend for an online store with product management, shopping cart, and orders.

## 🚀 Features

- 🛍️ Complete product and category management
- 🛒 Persistent shopping cart system per user
- 📦 Order management with status tracking
- 💳 Payment gateway simulation
- 🔍 Product filters and search
- 🏗️ Clean and scalable MVC architecture

## 🛠️ Technologies

- Node.js
- Express.js
- JWT for authentication
- bcrypt for security
- Layered architecture (MVC)

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/MrDanLee/ecommerce-api.git
cd ecommerce-api
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env
# Edit .env with your settings
```

4. Start server
```bash
npm run dev
```

Server will run at `http://localhost:3001`

## 🔗 Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get profile (requires auth)

### Products
- `GET /api/products` - List products (with filters)
- `GET /api/products/:id` - Get product details
- `GET /api/products/categories` - List categories

### Cart
- `GET /api/cart` - View my cart (requires auth)
- `POST /api/cart` - Add product (requires auth)
- `PUT /api/cart/:productId` - Update quantity (requires auth)
- `DELETE /api/cart/:productId` - Remove product (requires auth)

### Orders
- `POST /api/orders` - Create order (requires auth)
- `GET /api/orders` - View my orders (requires auth)
- `GET /api/orders/:id` - View order details (requires auth)

## 🧪 Usage Examples

### 1. Register user
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "Daniel Lozano",
  "email": "daniel@test.com",
  "password": "123456"
}
```

### 2. Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "daniel@test.com",
  "password": "123456"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "Daniel Lozano",
    "email": "daniel@test.com",
    "role": "customer"
  }
}
```

### 3. View products
```http
GET /api/products?category=Electronics&sort=price-asc
```

### 4. Add to cart
```http
POST /api/cart
Authorization: Bearer {token}
Content-Type: application/json

{
  "productId": 1,
  "quantity": 2
}
```

### 5. Create order
```http
POST /api/orders
Authorization: Bearer {token}
Content-Type: application/json

{
  "shippingAddress": "123 Main St, Madrid, Spain",
  "paymentMethod": "credit_card"
}
```

## 📊 Available Filters

Products can be filtered by:
- `category` - Product category
- `minPrice` - Minimum price
- `maxPrice` - Maximum price
- `search` - Search by name or description
- `sort` - Sorting: `price-asc`, `price-desc`, `rating`

Example:
```
GET /api/products?category=Electronics&minPrice=100&maxPrice=500&sort=price-asc
```

## 🗄️ Project Structure
```
ecommerce-api/
├── src/
│   ├── config/          # Configuration (simulated DB)
│   ├── controllers/     # Business logic
│   ├── middleware/      # Authentication and error handling
│   ├── models/          # Data models
│   ├── routes/          # API routes
│   ├── utils/           # Utilities (seed data)
│   └── app.js           # Express configuration
├── .env.example         # Example environment variables
├── package.json
├── server.js            # Entry point
└── README.md
```

## 🔐 Authentication

Uses JWT (JSON Web Tokens). After login, include the token in the header:
```
Authorization: Bearer {your_token_here}
```

## 📝 Notes

- Data is stored in memory (lost on restart)
- In production you should use MongoDB or PostgreSQL
- Includes 8 demo products on startup
- Cart is automatically created on user registration

## 👤 Author

Daniel Andrés Lozano Meriño
- GitHub: [@MrDanLee](https://github.com/MrDanLee)
- Email: daniel23lozano@gmail.com

## 📝 License

MIT
