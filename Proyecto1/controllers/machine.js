/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Proyecto
 * Módulo | `machine.js`
 *
 * A01657103 | Daniel Bakas Amuchástegui
 * A01027543 | Santiago Hernández Guerrero
 *
 * Sep 14, 2022
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Main
const machine = (_, res) => {
    res.render('machine', {
        title: 'Conoce tu Boleto',
        code: '3476'
    });
    // TODO: Send as a view parameter the result of the spin
    // TODO: Send the code in the router manager, so the view already knows which code the machine will produce
};

//* Exports
export { machine };