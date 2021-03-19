import axios from 'axios';

const BaseUrl = `https://developers.themoviedb.org/3`;
const ApiKey = `cc5099c071c0f026952c3ddb538de246`;

axios.defaults.baseURL = BaseUrl;

const apiService = async (url = '', config = {}) => {
  try {
    const { data } = await axios.get(url, config);
    return data.hits;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export function getPopular(page) {
  return apiService(
    `${BaseUrl}/trending/get-trending?api_key=${ApiKey}&page=${page}`,
  );
}

export function getMovieSearch(query, page) {
  return apiService(
    `${BaseUrl}/search/search-movies?api_key=${ApiKey}&query=${query}&page=${page}`,
  );
}

export function getMoviePage(id) {
  return apiService(
    `${BaseUrl}/movies/get-movie-details?api_key=${ApiKey}&movie_id=${id}`,
  );
}

export function getMovieActors(id) {
  return apiService(
    `${BaseUrl}/movies/get-movie-credits?api_key=${ApiKey}&movie_id=${id}`,
  );
}

export function getMovieReviews(id, page) {
  return apiService(
    `${BaseUrl}/movies/get-movie-reviews?api_key=${ApiKey}&movie_id=${id}&page=${page}`,
  );
}
