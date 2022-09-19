/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto
 * Controlador | `dashboard.js`
 *
 * A01657103 | Daniel Bakas Amuchástegui
 * A01027543 | Santiago Hernández Guerrero
 *
 * Sep 17, 2022
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

import { getAll } from "./users.js";

//* Main
const data = { title: "Admin Dashboard", users: `${getAll}` };
const dashboard = async (_, res) => res.send(data);

//* Exports
export { dashboard };