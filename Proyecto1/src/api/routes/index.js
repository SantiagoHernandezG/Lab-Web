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
import { home } from "../controllers/home.js";
import { machine } from "../controllers/machine.js";
import { dashboard } from "../controllers/dashboard.js";
import { router as users } from "./users.js";

//* Main
// Router
const router = Router();
// Routes
router.get("/", home);
router.get("/machine", machine);
router.get("/dashboard", dashboard);
router.use("/users", users);

//* Exports
export { router };