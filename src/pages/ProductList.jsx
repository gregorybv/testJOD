import React, { useState } from 'react';
import ListItem from '../components/ListItem/ListItem';
import Pagination from '../components/Pagination/Pagination';
import { products } from '@/products';



const PAGE_SIZE = 2;

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const productsToShow = products.slice(start, end);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);

  return (
    <div style={{margin: '0 15px'}}>
      <div style={{display:"flex", justifyContent: 'center', gap: '110px', flexWrap: 'wrap', padding: '0 25px'}}>
        {productsToShow.map((product, index) => (
          <ListItem
            key={index}
            name={product.name}
            brand={product.brand}
            imageUrl={product.imageUrl}
            badge={product.badge}
          />
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default ProductList;
