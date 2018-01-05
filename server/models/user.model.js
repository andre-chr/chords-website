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
});

songSchema.statics = {
	getAll() {
		return Song.find().sort({title: 1});
	}
}

module.exports = mongoose.model('Song', songSchema);