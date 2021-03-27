import { useState, useEffect, lazy, Suspense } from 'react';
import {
  NavLink,
  Route,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import * as apiService from '../../service/apiService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Not_Found from '../../img/Not_Found.jpg';
import Loader from 'react-loader-spinner';
import useStyles from './style';

const Cast = lazy(() => import('./Cast' /* webpackChunkName: "cast-subview"*/));

const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "reviews-subview"*/),
);

function MovieDetailsPage() {
  const classes = useStyles();
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    apiService
      .getMoviePage(movieId)
      .then(({ poster_path, original_title, popularity, overview, genres }) => {
        setMovie({
          src: poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : Not_Found,
          title: original_title,
          score: popularity.toFixed(1),
          overview,
          genres,
        });
      })
      .catch(error =>
        toast(error.message, {
          type: 'Something went wrong ',
        }),
      );
  }, [movieId]);

  const handleGoBack = e => {
    history.push(location?.state?.from || '/');
  };

  return (
    <main>
      <button
        onClick={handleGoBack}
        type="button"
        className={classes.goBackBtn}
      >
        {' '}
        Go back
      </button>
      <>
        <div className={classes.movieWrapper}>
          <img src={movie.src} alt={movie.title} className={classes.movieImg} />
          <div className={classes.movieDescrip}>
            <h2>{movie.title}</h2>
            <h3>User Score</h3>
            <p>{movie.score}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul className={classes.generesList}>
              {movie.genres &&
                movie.genres.map(genre => (
                  <li key={genre.id} className={classes.genres}>
                    {genre.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <ul className={classes.linksList}>
          <li className={classes.links}>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location?.state?.from ?? '/' },
              }}
              className={classes.navLink}
            >
              Cast
            </NavLink>
          </li>
          <li className={classes.links}>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: location?.state?.from ?? '/' },
              }}
              className={classes.navLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Suspense
          fallback={
            <Loader
              className={classes.loader}
              type="TailSpin"
              color="#800000"
              height={200}
              width={200}
              timeout={3000} //3 secs
            />
          }
        >
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </Suspense>
      </>
    </main>
  );
}

export default MovieDetailsPage;
