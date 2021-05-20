const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({

  uid:   {     type: String,    required: true },

  content: {     type: String,    required: true  },

})



module.exports = mongoose.model('Comment', commentSchema)
