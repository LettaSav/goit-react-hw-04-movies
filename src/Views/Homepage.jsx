import { Link, useLocation, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useStyles from './style';
import { Pagination } from '@material-ui/lab';

import * as apiService from '.././service/apiService';

const Homepage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const history = useHistory();

  const page = new URLSearchParams(location.search).get('page') ?? 1;

  const classes = useStyles();

  useEffect(() => {
    apiService
      .getPopular(page)
      .then(({ results, total_pages }) => {
        setMovies(results);
        setTotalPage(total_pages);
      })
      .catch(error =>
        toast(error.message, {
          type: 'Something went wrong ',
        }),
      );
  }, [page]);
  const onHandlePage = (event, page) => {
    history.push({ ...location, search: `page=${page}` });
  };

  return (
    <>
      <h1 className={classes.trending}>Trending today</h1>
      <ul className={classes.movieTrend}>
        {movies.map(movie => (
          <li key={movie.id} className={classes.movieItem}>
            <Link
              to={{
                pathname: `movies/${movie.title}${movie.id}`,
                state: { from: location },
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
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

export default Homepage;
