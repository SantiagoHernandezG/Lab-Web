/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto
 * Módulo | `www.js`
 *
 * A01657103 | Daniel Bakas Amuchástegui
 * A01027543 | Santiago Hernández Guerrero
 *
 * Sep 14, 2022
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
// Package Imports
import debug from "debug";
import {createServer} from 'http';
// Project Imports
import app from '../app.js';

//* Main
// port | Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// server | Create HTTP server.
const server = createServer(app);
// Listen on provided port, on all network interfaces.
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// normalizePort | Normalize a port into a number, string, or false.
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port))
        return val; // named pipe
    else if (port >= 0)
        return port; // port number
    else
        return false;
}

// onError | Event listener for HTTP server "error" event.
function onError(error) {
    if (error.syscall !== 'listen')
        throw error;

    const bind = (port instanceof String ? 'Pipe ' : 'Port ') + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            break;
        default:
            throw error;
    }
    process.exit(1);
}

// onListening | Event listener for HTTP server "listening" event.
function onListening() {
    const addr = server.address();
    const bind = addr instanceof String ? 'pipe ' + addr : 'port ' + addr.port;
    debug('proyecto1:server')('Listening on ' + bind);
}