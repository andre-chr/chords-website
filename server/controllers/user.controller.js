const Song = require('../models/user.model');

module.exports = {
	getSongs: function(req, res) {
		Song.find({}, function(err, songs) {
			res.send(songs);
		}).sort({title: 1});
	}
}
