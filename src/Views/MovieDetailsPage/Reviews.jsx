import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as apiService from '../../service/apiService';
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStyles from './style';

function Reviews() {
  const classes = useStyles();
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    apiService
      .getMovieReviews(movieId, page)
      .then(({ results, page }) => {
        if (results.length === 0) {
          toast.error(' There is no reviews yet');
          return;
        }
        setReviews(results);
        setPage(page);
      })
      .catch(error =>
        toast(error.message, {
          type: 'Something went wrong ',
        }),
      );
  }, [movieId, page]);

  const currentPageHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ul className={classes.reviewList}>
        {reviews &&
          reviews.map(review => (
            <li key={review.id} className={classes.reviewItem}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
      </ul>
      {reviews.lenght !== 0 && (
        <button
          onClick={currentPageHandler}
          type="button"
          className={classes.goBackBtn}
        >
          Get back to movie
        </button>
      )}
      <ToastContainer />
    </>
  );
}

export default Reviews;
