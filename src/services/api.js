import {API_KEY,BASE_URL} from '../config/api_config';
import axios from 'axios';
import qs from 'qs';


//Getting the movie list
export const getMovies = async (type) => {
  const movieURL = BASE_URL + 'movie/' + type;
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    };

    const moviesNowPlaying = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: 'repeat' }),
    });

    const response = await moviesNowPlaying.get(movieURL, { params });
    const result = response.data.results;

    return result;
  } catch (error) {
      return error;
  }
};

//Getting the TV shows
export const getTVShows = async (type) => {
  const tvURL = BASE_URL + 'tv/' + type;
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    };

    const tvShows = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: 'repeat' }),
    });

    const response = await tvShows.get(tvURL, { params });
    const result = response.data.results;

    return result;
  } catch (error) {
      return error
  }
};

export const getMovieDetail = async (id, listType) => {
  listType = listType || 'movie';
  const movieDetailURL = `${BASE_URL}${listType}/${id}`;
  console.log(movieDetailURL);
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
    };

    const movieDetail = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: 'repeat' }),
    });

    const response = await movieDetail.get(movieDetailURL, { params });

    const result = response.data;

    return result;
  } catch (error) {
      return error;
  }
};
