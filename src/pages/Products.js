import React from 'react';
import './Products.css';

const Products = ({ cart, setCart }) => {
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];

  const handleAddToCart = (product) => {
    alert(`${product.name} has been added to the cart!`);
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div id="products">
      <h2 className="products-heading">Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-placeholder"></div>
            <h4>{product.name}</h4>
            <p>Price: {product.price} rs</p>
            <button 
              className="add-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
