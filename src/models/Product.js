const db = require('../config/database');

class Product {
  static create(productData) {
    const product = {
      id: db.counters.productId++,
      ...productData,
      rating: (Math.random() * 2 + 3).toFixed(1),
      reviews: Math.floor(Math.random() * 500) + 50,
      createdAt: new Date()
    };
    db.products.push(product);
    return product;
  }

  static findAll(filters = {}) {
    let products = [...db.products];

    if (filters.category) {
      products = products.filter(p => p.category === filters.category);
    }
    if (filters.minPrice) {
      products = products.filter(p => p.price >= parseFloat(filters.minPrice));
    }
    if (filters.maxPrice) {
      products = products.filter(p => p.price <= parseFloat(filters.maxPrice));
    }
    if (filters.search) {
      const term = filters.search.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
      );
    }
    if (filters.sort === 'price-asc') {
      products.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'price-desc') {
      products.sort((a, b) => b.price - a.price);
    } else if (filters.sort === 'rating') {
      products.sort((a, b) => b.rating - a.rating);
    }

    return products;
  }

  static findById(id) {
    return db.products.find(p => p.id === id);
  }

  static updateStock(productId, quantity) {
    const product = this.findById(productId);
    if (product) product.stock -= quantity;
    return product;
  }

  static getCategories() {
    return [...new Set(db.products.map(p => p.category))];
  }
}

module.exports = Product;