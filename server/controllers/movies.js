const Movie = require('../models/movie')

module.exports ={
    addMovie :  (req, res)=>{
        try {
            Movie.create(req.body)
            res.status(201).json({message:"your movie review added successfuly" })
        } catch (error) {
            res.status(400).json({message:"error creating movie review"})
            console.log(error)
        }
    },
    getMovies :  (req, res)=>{
        try {
          const data = Movie.find()
          res.status(201).json(data)
        } catch (error) {
            res.status(400).json({message:"something went wrong"})
            console.log(error)
        }
    },
    getOneMovie :  (req, res)=>{
        
    },
    deleteMovie :  (req, res)=>{

    },
    updateMovie :  (req, res)=>{

    },
}