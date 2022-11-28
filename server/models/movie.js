const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {
    name: {
      type: String,
    
    },
    gender: {
      type: String,
   
    },
    description: {
      type: String,
   
    },
    image: {
      type: String,

    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("movie", MovieSchema);