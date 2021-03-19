import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import * as apiService from '../service/apiService';

const MoviePage = () => {
  const [movies, setMovies] = useState('');
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const handleSearch = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setMovies([]);
  };

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  //   const handleSubmit = e => {
  //     e.preventDefault();

  //     onSubmit(searchValue);
  //     setSearchValue('');
  //   };
  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    apiService
      .getMovieSearch(query, page)
      .then(({ hits }) => setMovies(prevState => [...prevState, ...hits]))
      .then(() => {
        if (page !== 1) {
          scroll();
        }
      })
      .catch(error =>
        toast(error.message, {
          type: 'Something went wrong ',
        }),
      );
  }, [query, page]);

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          query={query}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
        <button type="submit"></button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}></li>
        ))}
      </ul>
    </>
  );
};
export default MoviePage;
