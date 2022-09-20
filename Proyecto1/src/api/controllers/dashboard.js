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

import app from "../../app.js";
import fetch from "node-fetch";

//* Main
const dashboard = async (_, res) => {
    const endpoint = app.get("api");
    const url = new URL("users", endpoint);
    const data = await fetch(url);
    const users = await data.json();
    const result = { title: "Admin Dashboard", users };
    res.send(result);
};

//* Exports
export { dashboard };