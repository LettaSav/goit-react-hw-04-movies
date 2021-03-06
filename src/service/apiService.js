// import axios from 'axios';

const ApiKey = 'cc5099c071c0f026952c3ddb538de246';
const BASE_URL = 'https://api.themoviedb.org/3';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// const apiService = async (url = '', config = {}) => {
//   const data = await fetch(url, config);
//   return data.hits;
// };

// export function getPopular() {
//   return apiService(`/trending/movie/day?api_key=${ApiKey}`).then(
//     data => data.results,
//   );
// }
async function apiService(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(
        new Error('404 The resource you requested could not be found '),
      );
}

export function getPopular(page) {
  return apiService(
    `${BASE_URL}/trending/movie/day?api_key=${ApiKey}&page=${page}`,
  );
}

export function getMovieSearch(query, page) {
  return apiService(
    `${BASE_URL}/search/movie?api_key=${ApiKey}&query=${query}&page=${page}`,
  );
}

export function getMoviePage(movieId) {
  return apiService(`${BASE_URL}/movie/${movieId}?api_key=${ApiKey}`);
}

export function getMovieActors(movieId) {
  return apiService(`${BASE_URL}/movie/${movieId}/credits?api_key=${ApiKey}`);
}

export function getMovieReviews(movieId, page) {
  return apiService(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${ApiKey}&page=${page}`,
  );
}
