const express = require('express');


const router = express.Router();

const MoviesController = require('../controllers/movies');

router.post("/addMovie",MoviesController.addMovie)
router.get("/getMovies",MoviesController.getMovies)
router.get("/getOneMovie",MoviesController.getOneMovie)
router.delete("/deleteMovie",MoviesController.deleteMovie)
router.put("/updateMovie",MoviesController.updateMovie)

module.exports = router