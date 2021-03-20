import apiService from '../service/apiService';
import {
  useEffect,
  useState,
  useParams,
  NavLink,
  useLocation,
  useRouteMatch,
} from 'react';
import { toast } from 'react-toastify';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { slug } = useParams();
  const location = useLocation();
  const { url } = useRouteMatch();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  useEffect(() => {
    apiService
      .getMoviePage(movieId)
      .then(({ poster_path, original_title, popularity, overview, genres }) => {
        setMovie({
          src: poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : `error`,
          title: original_title,
          score: popularity.toFixed(1),
          overview,
          genres,
        });
      })
      .catch(error => {
        toast(error.message, {
          type: 'Something went wrong ',
        });
      });
  }, [movieId]);

  return (
    <>
      <div>
        <img src={movie.src} alt={movie.title} />
        <div>
          <h2>{movie.title}</h2>
          <h3>User Score</h3>
          <p>{movie.score}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <ul>
        <li>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { from: location?.state?.from ?? '/' },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { from: location?.state?.from ?? '/' },
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default MovieDetailsPage;
