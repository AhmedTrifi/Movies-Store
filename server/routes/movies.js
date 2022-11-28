const express = require('express');


const router = express.Router();

const MoviesController = require('../controllers/movies');

router.post("/addMovie",MoviesController.addMovie)
router.get("/getMovies",MoviesController.getMovies)
router.get("/getOneMovie/:id",MoviesController.getOneMovie)
router.delete("/deleteMovie/:id",MoviesController.deleteMovie)
router.put("/updateMovie/:id",MoviesController.updateMovie)

module.exports = router