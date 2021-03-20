import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import useStyles from './style';
import { Pagination } from '@material-ui/lab';

import { Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import SearchBar from '../Components/SearchBar/SearchBar';

import * as apiService from '../service/apiService';

const MoviePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const { url } = useRouteMatch();

  const page = new URLSearchParams(location.search).get('page') ?? 1;

  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!query) return;
    apiService
      .getMovieSearch(query, page)
      .then(({ results, total_pages }) => {
        setMovies(results);
        setTotalPage(total_pages);
      })
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

  const handleSearch = newQuery => {
    setQuery(newQuery);
    setTotalPage(1);
    setMovies([]);
  };
  const onHandlePage = (event, page) => {
    history.push({ ...location, search: `page=${page}` });
  };
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ul className={classes.movieTrend}>
        {movies.map(movie => (
          <li key={movie.id} className={classes.movieItem}>
            <Link
              to={{
                pathname: `${url}/${movie.title}${movie.id}`,
                state: { from: location },
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className={classes.movieImg}
              />
            </Link>
            <span className={classes.movieTitle}>{movie.title}</span>
          </li>
        ))}
      </ul>
      {totalPage > 1 && (
        <Pagination
          variant="outlined"
          color="primary"
          count={totalPage}
          onChange={onHandlePage}
          page={Number(page)}
          showFirstButton
          showLastButton
        />
      )}
    </>
  );
};

export default MoviePage;
