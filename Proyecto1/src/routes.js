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
import { router as api } from "./api/routes/index.js";
import { router as client } from "./client/routes.js";

//* Main
// Router
const router = Router();
// Routes
router.use("/", client);
router.use("/api", api);

//* Exports
export { router };