/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto
 * Controlador | `users.js`
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
const users = async (_, res) => {
    const endpoint = app.get("api");
    const url = new URL("users", endpoint);
    const data = await fetch(url);
    const json = await data.json();
    res.send(json);
};

//* Exports
export { users };