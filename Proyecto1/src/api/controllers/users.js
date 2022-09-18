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
import { User } from "../models/user.js";

//* Main
// GET | All
const getAll = async (_, res) => {
    const data = await User.find();
    res.send(data);
};

// GET | One
const exists = async (req, res) => {
    const { id } = req.params;
    const data = await User.find({ code: id });
    const { _id, names, ticket } = data;
    if (names)
        res.send({ ticket });
    else
        res.send({ _id });
};

// GET | One
const get = async (req, res) => {
    const { id } = req.params;
    const data = await User.findById(id);
    res.send(data);
};

// DELETE | One
const del = async (req, res) => {
    const { id } = req.params;
    const data = await User.remove({ _id: id });
    res.send(data);
};

// POST | One
const post = async (req, res) => {
    const { body } = req;
    const data = await User(body).save();
    res.send(data);
};

// PUT | One
const put = async (req, res) => {
    const { id } = req.params;
    const [filter, update] = [{ _id: id }, { $set: req.body }];
    const data = await User.updateOne(filter, update);
    res.send(data);
};

//* Exports
export { del, exists, getAll, get, post, put };