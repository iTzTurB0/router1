import React, { useState } from 'react';

const Filter = ({ handleFilterChange }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    handleFilterChange({ title: event.target.value, rating });
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
    handleFilterChange({ title, rating: event.target.value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
