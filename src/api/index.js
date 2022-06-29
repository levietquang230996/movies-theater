// export const image_full_address = 'https://image.tmdb.org/t/p/original';
// export const image_w500_address = 'https://image.tmdb.org/t/p/w500';

const API_KEY = '44a58b503e188dde40db869493f240a0';
// 14ccdb96456935bbb41591e99697d262
export const fetchMovies = (type) =>
    `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`;
// types: popular, top_rated, upcoming, lastest

export const fetchTV = (type) =>
    `https://api.themoviedb.org/3/tv/${type}?api_key=${API_KEY}&language=en-US&page=1`;

export const fetchSingleMovie = (movieId) =>
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

export const fetchSingleMovieCredits = (movieId) =>
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;



export const fetchImageOriginal = (imageUrl) => `https://image.tmdb.org/t/p/original${imageUrl}`;
export const fetchImageW500 = (imageUrl) => `https://image.tmdb.org/t/p/w500${imageUrl}`;

export const fetchVideos = (id) => `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;

