"use client"
import React from 'react';

function ProductCard({ product }) {
  if (!product) return null; // Defensive check

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h2>{product.title}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <img src={product.image} alt={product.title} style={{ width: '100px' }} />
    </div>
  );
}

export default ProductCard;
