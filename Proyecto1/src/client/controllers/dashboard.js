/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto
 * Controlador | `dashboard.js`
 *
 * A01657103 | Daniel Bakas Amuchástegui
 * A01027543 | Santiago Hernández Guerrero
 *
 * Sep 14, 2022
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import app from "../../app.js";
import fetch from "node-fetch";

//* Main
const dashboard = async (_, res) => {
    const endpoint = app.get("api");
    const url = new URL("dashboard", endpoint);
    const data = await fetch(url);
    const json = await data.json();
    res.render("dashboard", json);
};

//* Exports
export { dashboard };