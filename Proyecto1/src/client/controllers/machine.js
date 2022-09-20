/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto
 * Controlador | `machine.js`
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
const machine = async (_, res) => {
    const endpoint = app.get("api");
    const url = new URL("machine", endpoint);
    const data = await fetch(url);
    res.render("machine", data);
};

//* Exports
export { machine };