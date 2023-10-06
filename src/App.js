import React, { useState } from 'react';
import Filter from './Filter';
import Pages from './Page.js'
import MovieList from './MovieList';
import "./App.css"
import { Route,Routes } from 'react-router-dom';
import Page from './Page.js';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleFilterChange = (filter) => {
    const { title, rating } = filter;
    let filteredMovies = movies;

    if (title) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (rating) {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.rating >= Number(rating)
      );
    }

    setFilteredMovies(filteredMovies);
  };

  return (
    <Routes>
      <Route path='/' element={    <div className="app">
      <h1>My Movie App</h1>
      <Filter handleFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies.length > 0 ? filteredMovies : movies} />
      <h2>Add a New Movie</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const { title, description, posterURL, rating } = event.target.elements;
          handleAddMovie({
            title: title.value,
            description: description.value,
            posterURL: posterURL.value,
            rating: Number(rating.value),
          });
          event.target.reset();
        }}
      >
        <input type="text" name="title" placeholder="Title" required />
        <textarea name="description" placeholder="Description" required />
        <input type="url" name="posterURL" placeholder="Poster URL" required />
        <input type="number" name="rating" placeholder="Rating" required />
        <button type="submit">Add Movie</button>
      </form>
    </div>}/>
    <Route path='/movie/:id' element={<Page/>}/>
    </Routes>

  );
};

export default App;
