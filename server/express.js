import express from 'express';
import http from 'http';
import path from 'path';
import routes from './routes/user.route'

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', routes);

app.get('*', (req, res) => {
	app.sendFile(path.join(__dirname, '../client/dist/index.html'));
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