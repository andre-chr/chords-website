const Song = require('../models/user.model');

function getSongs(req, res) {
	return Song.getAll()
		.then(songs => res.json(users))
		.catch(e => next(e));
}

module.exports = getSongs;