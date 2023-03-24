import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './Pagination.module.css';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [inputValue, setInputValue] = useState(currentPage);

  const handleInputValueChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePreviousPageClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPageClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      const pageNumber = parseInt(inputValue);

      if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
        onPageChange(pageNumber);
      }
    }
  };

  return (
    <div className={styles.container}>
      <Button onClick={handlePreviousPageClick} disabled={currentPage === 1}>
        Prev
      </Button>

      <input
        type='number'
        className={styles.input}
        value={currentPage}
        onChange={handleInputValueChange}
        onKeyDown={handleInputKeyDown}
      />
      <span className={styles.totalPages} >of {totalPages}</span>

      <Button onClick={handleNextPageClick} disabled={currentPage === totalPages}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
