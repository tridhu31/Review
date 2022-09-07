var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://tridhu31:tridhu31@cluster0.tliarvd.mongodb.net/?retryWrites=true&w=majority')
var schema = mongoose.Schema({
  name:{
    type:'string',
    required:true,
  },
  review:{
    type:'string',
    required:true
  }
})

module.exports = mongoose.model("Review App", schema)
