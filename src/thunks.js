import axios from 'axios';
import { setMovies, setGenres, setHearted, setLogs } from './actions';
import { endpoints } from '../config';

export const addLogEvent = (message, logsList) => (dispatch) => {
    let currentTime = new Date();
    let date = `${currentTime.getFullYear()}-${currentTime.getMonth() + 1}-${currentTime.getDate()}`;
    let time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    let formattedDate = `${date} ${time}`;
    dispatch(setLogs([ ...logsList, `${formattedDate}: ${message}`]));
};

export const getMovies = () => (dispatch) => {
    // thunk - dispatch actions when needed
    axios
        .get(endpoints.mostPopularMovies())
        .then((res) => {
            dispatch(setMovies(res.data.results))
        })
        .catch((error) => console.log(error));
};

export const getGenreMovies = (genre, logsList) => (dispatch) => {
    dispatch(addLogEvent(`Pakeistas zanras i ${genre.name}`, logsList));
    axios
        .get(endpoints.genreMovies(genre.id))
        .then((res) => {
            dispatch(setMovies(res.data.results));
        })
        .catch((error) => console.log(error));
};

export const getGenres = () => (dispatch) => {
    axios
        .get(endpoints.genres())
        .then((res) => {
            dispatch(setGenres(res.data.genres));
        })
        .catch((error) => console.log(error));
};

export const addHearted = (movie, heartedList, logsList) => (dispatch) => {
    dispatch(setHearted([...heartedList, movie.id]));
    dispatch(addLogEvent(`Uzdeta sirdele filmui ${movie.original_title}`, logsList));
};

export const removeHearted = (movie, heartedList, logsList) => (dispatch) => {
    dispatch(setHearted(
        heartedList.filter((currentId) => currentId !== movie.id)
    ));
    dispatch(addLogEvent(`Nuimta sirdele filmui ${movie.original_title}`, logsList));
};
