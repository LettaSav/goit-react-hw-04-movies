import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as apiService from '../../service/apiService';
import { toast } from 'react-toastify';
import useStyles from './style';
import Not_Found from '../../img/Not_Found.jpg';

function Cast() {
  const classes = useStyles();
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const [actors, setActors] = useState([]);

  useEffect(() => {
    apiService
      .getMovieActors(movieId)
      .then(({ cast }) => {
        if (cast.length === 0) {
          toast.error('No results!');
          return;
        }
        setActors(cast);
      })
      .catch(error =>
        toast(error.message, {
          type: 'Something went wrong ',
        }),
      );
  }, [movieId]);

  return (
    <>
      <ul className={classes.actorsList}>
        {actors &&
          actors.map(actor => (
            <li key={actor.id} className={classes.actorItem}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : Not_Found
                }
                alt={actor.original_name}
                className={classes.actorImg}
              />
              <h4 className={classes.actorInfo}>{actor.original_name}</h4>
              <p className={classes.actorInfo}>{actor.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Cast;
