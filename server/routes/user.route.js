const express = require('express');
const userController = require('../controllers/user.controller')
const userModel = require('../models/user.model');

const router = express.Router();

router.route('/').get(userController.getSongs);

/**
router.get('/', function(req, res) {
	console.log('route');
	res.send(userController.getSongs());
});
*/
module.exports = router;