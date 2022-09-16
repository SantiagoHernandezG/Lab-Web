/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto
 * Controlador | `home.js`
 *
 * A01657103 | Daniel Bakas Amuchástegui
 * A01027543 | Santiago Hernández Guerrero
 *
 * Sep 14, 2022
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import app from "../../app.js";

//* Main
const home = async (_, res) => {
    const endpoint = app.get("api");
    const url = new URL(endpoint);
    const data = await fetch(url);
    const json = await data.json();
    res.render("index", json);
};

//* Exports
export { home };