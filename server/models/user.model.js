const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  by: {
  	type: String
  },
  key: {
  	type: Number,
  	required: true
  },
  body: {
  	type: String,
  	required: true
  }
}, { collection: 'Song'});

module.exports = mongoose.model('Song', songSchema);

/**
Song.statics.getAll = function() {
	console.log('fuack');
	return 
}

*/
