/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto
 * Rutas | `index.js`
 *
 * A01657103 | Daniel Bakas Amuchástegui
 * A01027543 | Santiago Hernández Guerrero
 *
 * Sep 14, 2022
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
// Package Imports
import { Router } from "express";
// Project Imports
import { home } from "./controllers/home.js";
import { machine } from "./controllers/machine.js";
import { dashboard } from "./controllers/dashboard.js";
import { users } from "./controllers/users.js";

//* Main
// Router
const router = Router();
// Routes
router.get("/", home);
router.get("/dashboard", dashboard);
router.get("/machine", machine);
router.get("/users", users);

//* Exports
export { router };