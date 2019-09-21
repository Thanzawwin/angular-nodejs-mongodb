const mongoose = require('mongoose');
//you can use
// const Schema = new mongoose.Schema;
// const postSchema = {

// }

const postSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true
  },
  body:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  }
})

module.exports = mongoose.model('Posts',postSchema);