import axios from 'axios';
const apiKey = 'f185c2da';

export default class MovieService {
    getMovieByTitle({ title, type }, page = 1) {
        return axios.get(`https://www.omdbapi.com/?s=${title}&page=${page}&apikey=${apiKey}`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    }

    getMovieById(id) {
        return axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
    }
}