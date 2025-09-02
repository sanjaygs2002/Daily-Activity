import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Product List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map(item => (
          <ProductCard key={item.id} product={item} />
        ))
      )}
    </div>
  );
}

export default ProductList;

