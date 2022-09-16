/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto
 * Módulo | `error.pug`
 *
 * A01657103 | Daniel Bakas Amuchástegui
 * A01027543 | Santiago Hernández Guerrero
 *
 * Sep 14, 2022
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
// Package Imports
import {Router} from 'express';
// Project Imports
import {router as dashboard} from "./dashboard.js";
import {router as home} from "./home.js";
import {router as machine} from "./machine.js";
import {router as users} from "./users.js";

//* Main
// Router
const router = Router();
// Routes
router.use('/', home);
router.use('/dashboard', dashboard);
router.use('/machine', machine);
router.use('/users', users);

//* Exports
export {router};