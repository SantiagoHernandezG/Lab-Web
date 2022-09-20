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
// Package Imports
import fetch from "node-fetch";
// Project Imports
import app from "../../app.js";

//* Main
const newTicket = async (id, body) => {
    const endpoint = app.get("api");
    const url = new URL(`users/${id}`, endpoint);
    const res = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    console.log(await res.json());
};

const home = async (_, res) => {
    const endpoint = app.get("api");
    const url = new URL(endpoint);
    const data = await fetch(url);
    const json = await data.json();
    res.render("index", json);
};

//* Exports
export { home };