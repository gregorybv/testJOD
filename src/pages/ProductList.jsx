import React, { useState } from 'react';
import ListItem from '../components/ListItem';
import Pagination from '../components/Pagination/Pagination';

const products = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFtYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Burger 1',
    brand: 'Big Mack',
    badge: 'New',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFtYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Burger 2',
    brand: 'Mack',
    badge: 'Top',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGFtYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Burger 3',
    brand: 'Hamburger',
    badge: 'Top!!!',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1610970878459-a0e464d7592b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhhbWJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Burger 4',
    brand: 'Chisburger',
    badge: 'New!!!',
  },
];

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
    <div>
      <div style={{display:"flex", gap: '160px'}}>
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
