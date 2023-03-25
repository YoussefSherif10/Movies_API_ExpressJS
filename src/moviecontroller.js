//import service layer
const moviesService = require('./movieservice');

const getMovies = (done) => {
//call service method getMovies method
    moviesService.getMovies(done);
}

const getMovieById = (movieId, done) => {
    //call service method getMovieById method

}

const saveMovieDetails = (movieDetails, done) => {
    //call service method saveMovieDetails method

}

const updateMovieDetails = (movieId, movieDetails, done) => {
    //call service method updateMovieDetails method

}

const deleteMovieById = (movieId, done) => {
    //call service method deleteMovieById method

}

module.exports = {
    getMovies, getMovieById, saveMovieDetails, updateMovieDetails, deleteMovieById
}
