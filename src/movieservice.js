//import axios module
const axios = require('axios');
const {response} = require("express");

//After starting the JSOn server check the port on which is running accordingly change
//the port in url given below

//This method will get all movies from json server
const getMovies = (done) => {
    axios.get("http://localhost:3000/movies")
        .then(response => {
            return done(null, response.data);
        })
        .catch(err => {
            return done('Encountered error while reading the data');
        })

}

//This method will get specific movie id from json server
const getMovieById = (movieId, done) => {
    axios.get(`http://localhost:3000/movies/${movieId}`)
        .then(response => {
            return done(null, response.data);
        })
        .catch(err => {
            return done('Movie Not Found');
        })

}
//This method will save Movie details in Json server
const saveMovieDetails = (movieDetails, done) => {
    axios.post(`http://localhost:3000/movies`, movieDetails)
        .then(response => {
            return done(null, response.data);
        })
        .catch(err => {
            return done('Failed to save the movie');
        })

}

//This method will update MovieDetails in Json Server
const updateMovieDetails = (movieId, movieDetails, done) => {
    axios.patch(`http://localhost:3000/movies/${movieId}`, movieDetails)
        .then(response => {
            return done(null, response.data);
        })
        .catch(err => {
            return done('Movie not found');
        })
}

//This method will delete specific movie from Json Server
const deleteMovieById = (movieId, done) => {
    axios.delete(`http://localhost:3000/movies/${movieId}`)
        .then(response => {
            return done(null, "DELETED");
        })
        .catch(err => {
            return done('Movie doesn\'t exist');
        })

}

module.exports = {
    getMovies, getMovieById, saveMovieDetails, deleteMovieById, updateMovieDetails
}
