import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStyles from './style';
import Button from '../Components/Button';
import Not_Found from '../img/Not_Found.jpg';

import { Link, useLocation, useRouteMatch, useHistory } from 'react-router-dom';
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
  const history = useHistory();

  useEffect(() => {
    if (location.search === '') {
      return;
    }

    const newSearch = new URLSearchParams(location.search).get('query');
    setQuery(newSearch, page);
  }, [location.search, page]);

  const scroll = () => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!query) return;
    apiService
      .getMovieSearch(query, page)
      .then(({ results, page }) => {
        if (results.length === 0) {
          toast.error(' There is no results for you search');
          return;
        }
        setMovies(results);
        setPage(page);
      })
      .then(() => {
        if (page !== 1) {
          scroll();
        }
      })
      .then(() => {
        if (page !== 0) {
          setShowBtn(true);
        }
      })
      .catch(error =>
        toast(error.message, {
          type: 'Something went wrong ',
        }),
      );
  }, [query, page]);

  const handleSearch = newSearch => {
    if (query === newSearch) return;
    setQuery(newSearch);
    setPage(1);
    setMovies([]);
    history.push({ ...location, search: `query=${newSearch}&page=1` });
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
      <ToastContainer />
    </>
  );
};

export default MoviePage;
