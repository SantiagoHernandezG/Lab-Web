/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto
 * Rutas | `users.js`
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
import { del, exists, get, getAll, post, put } from "../controllers/users.js";

//* Main
// Router
const router = Router();
// Routes
router.get("/", getAll);
router.post("/", post);
router.delete("/:id", del);
router.get("/:id", get);
router.put("/:id", put);
router.get("/:id/exists", exists);

//* Exports
export { router };