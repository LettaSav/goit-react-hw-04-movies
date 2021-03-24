import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import useStyles from './style';
import Button from '../Components/Button';
import Not_Found from '../img/Not_Found.jpg';

import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import SearchBar from '../Components/SearchBar/SearchBar';

import * as apiService from '../service/apiService';

const MoviePage = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [showBtn, setShowBtn] = useState(false);
  const location = useLocation();
  const { url } = useRouteMatch();

  const scroll = () => {
    window.scrollTo({
      top: document.window.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!query) return;
    apiService
      .getMovieSearch(query, page)
      .then(({ results, page }) => {
        setMovies(results);
        setPage(page);
      })
      .then(() => {
        if (page !== 0) {
          setShowBtn(true);
          scroll();
        }
      })
      .catch(error =>
        toast(error.message, {
          type: 'Something went wrong ',
        }),
      );
  }, [query, page]);

  const handleSearch = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setMovies([]);
  };
  const currentPageHandler = () => {
    setPage(prevState => prevState + 1);
  };
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ul className={classes.movieTrend}>
        {movies.map(movie => (
          <li key={movie.id} className={classes.movieItem}>
            <Link
              to={{
                pathname: `${url}/${movie.id}`,
                state: { from: location },
              }}
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
                    : Not_Found
                }
                alt={movie.title}
                className={classes.movieImg}
              />
            </Link>
            <span className={classes.movieTitle}>{movie.title}</span>
          </li>
        ))}
      </ul>
      {movies.lenght !== 0 && showBtn && (
        <Button onClick={currentPageHandler} />
      )}
    </>
  );
};

export default MoviePage;
