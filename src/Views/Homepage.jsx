import { Link } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import * as apiService from '../service/apiService';

const Homepage = ({ page }) => {
  const [movies, setMovies] = useState('');
  useEffect(() => {
    apiService
      .getPopular(page)
      .then(({ hits }) => setMovies(hits))
      .catch(error =>
        toast(error.message, {
          type: 'Something went wrong ',
        }),
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Homepage;
