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

//* Main
const machine = (_, res) => {
    res.send({
        title: "Conoce tu Boleto",
        code: "3476"
    });
};

//* Exports
export { machine };