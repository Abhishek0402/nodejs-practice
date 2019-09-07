const mongoose = require('mongoose');
const Schema = mongoose.Schema;



  //create geo Schema
  const GeoSchema = new Schema({
    type: {
      type: String,
      default: "Point"
    },
    coordinates: {
      type: [Number],
      index: "2dsphere"
    }
  });

//create ninja Scheme And Model
const NinjaSchema = new Schema({
    name: {
    type: String,
    required: [true,"Name is required"]
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,    //eithe 0 or 1
    default: false   //if no input is given then by default false comes in database
  },
  geometry: GeoSchema

  //add in geo location

});

//creating model that is connected in the database
const Ninja = mongoose.model('ninja',NinjaSchema);

module.exports = Ninja;
