import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useStyles from './style';
import Button from '../Components/Button';
import Not_Found from '../img/Not_Found.jpg';
import * as apiService from '.././service/apiService';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const classes = useStyles();

  const scroll = () => {
    window.scrollTop({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    apiService
      .getPopular(page)
      .then(({ results, page }) => {
        setMovies(results);
        setPage(page);
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
  }, [page]);

  const currentPageHandler = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <h1 className={classes.trending}>Trending today</h1>
      <ul className={classes.movieTrend}>
        {movies.map(movie => (
          <li key={movie.id} className={classes.movieItem}>
            <Link to={`/movies/${movie.id}`}>
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
      {movies.lenght !== 0 && <Button onClick={currentPageHandler} />}
    </>
  );
};

export default Homepage;
