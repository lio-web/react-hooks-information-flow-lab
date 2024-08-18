import React from 'react';

const Filter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div>
      <label htmlFor="category-filter">Filter by category:</label>
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
        {/* Add other categories as needed */}
      </select>
    </div>
  );
};

export default Filter;
