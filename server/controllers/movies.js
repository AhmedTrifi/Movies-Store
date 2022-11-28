const Movie = require('../models/movie')

module.exports ={
    addMovie :  async (req, res)=>{
        console.log(req.body);
        try {
            await Movie.create(req.body)
            res.status(201).json({message:"your movie review added successfuly" })
        } catch (error) {
            res.status(400).json({message:"error creating movie review"})
            console.log(error)
        }
    },
    getMovies : async (req, res)=>{
        try {
          const data = await Movie.find()
          console.log(data);
          res.status(201).json(data)
        } catch (error) {
            res.status(400).json({message:"something went wrong"})
            console.log(error)
        }
    },
    getOneMovie : async (req, res)=>{
        try {
            const data = await Movie.findOne({_id:req.params.id})
            res.status(201).json(data)
          } catch (error) {
              res.status(400).json({message:"something went wrong"})
              console.log(error)
          }
    },
    deleteMovie :  async (req, res)=>{
        try {
           await Movie.deleteOne({_id:req.params.id})
            res.status(201).json({message:"Movie deleted successfully"})
          } catch (error) {
              res.status(400).json({message:"something went wrong"})
              console.log(error)
          }
    },
    updateMovie : async (req, res)=>{
        try {
           await Movie.findByIdAndUpdate({_id:req.params.id},req.body)
           res.status(201).json({message:"Movie updated successfully"})
         } catch (error) {
             res.status(400).json({message:"something went wrong"})
             console.log(error)
         }
    },
}