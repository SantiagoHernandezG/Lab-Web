/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto
 * Módulo | `app.js`
 *
 * A01657103 | Daniel Bakas Amuchástegui
 * A01027543 | Santiago Hernández Guerrero
 *
 * Sep 13, 2022
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Import
// Package Imports
import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import path from 'path';
// Project Imports
import {router} from './routes/index.js';

//* Main
const app = express();
// body-parser Configuration
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// cookie-parser Configuration
app.use(cookieParser());
// logger Configuration
app.use(logger('dev'));
// PUBLIC_URL Configuration
app.use(express.static(path.join('public')));
// View Engine Configuration
app.set('views', path.join('views'));
app.set('view engine', 'pug');

// Routes
app.use('/', router);

export default app;