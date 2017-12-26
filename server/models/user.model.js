import mongoose from 'mongoose';

const SongSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  by: {
  	type: String
  },
  key: {
  	type: Number
  	required: true
  },
  body: [{
  	chords: {
  		type: String, 
  		required: true
  	}, 
  	lyrics: {
  		type: String, 
  		required: true
  	}
  }],


});