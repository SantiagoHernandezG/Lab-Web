/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto
 * Modelo | `user.js`
 *
 * A01657103 | Daniel Bakas Amuchástegui
 * A01027543 | Santiago Hernández Guerrero
 *
 * Sep 14, 2022
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
import { model, Schema } from "mongoose";

//* Main
const schema = new Schema({
    code: { type: String, required: true },
    names: { type: String, required: false },
    last_names: { type: String, required: false },
    mail: { type: String, required: false },
    phone: { type: String, required: false },
    ticket: { type: String, required: false }
});

const User = model("User", schema);

//* Exports
export { User };