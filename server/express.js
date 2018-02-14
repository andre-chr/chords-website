const express = require('express');
const http = require('http');
const path = require('path');
const routes = require('./routes/user.route');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/chords-web');
var db = mongoose.connection;
 
//check db connection
db.once('open', function() {
	console.log('Connected to MongoDB');
});

//check for errors on db
db.on('errors', function(err) {
	console.log(err);
});

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api', routes);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
	
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`Server running on localhost:${port}`));