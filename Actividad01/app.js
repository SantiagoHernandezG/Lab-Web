const calculadora = require('./mate')
const prompt = require('prompt-sync')();

let opp = 1
salir:
while(opp !=6){
    console.log("********************")
    console.log("*    CALCULADORA   *")
    console.log("*                  *")
    console.log("*  1. Sumar        *")
    console.log("*  2. Restar       *")
    console.log("*  3. Multiplicar  *")
    console.log("*  4. Dividir      *")
    console.log("*  5. Modulo       *")
    console.log("*  6. Salir        *")
    console.log("*                  *")
    console.log("********************")
    opp = prompt('Elija una opción: ')
    console.log('* * * * * * * * * * * * *');

    if(opp == 6){
        console.log("Saliendo...")
        break salir;
    }

    const num1 = prompt('Primer número: ')
    const num2 = prompt('Segundo número: ')

    switch (opp) {
        case "1":
            console.log('Resultado: '+calculadora.suma(parseInt(num1),parseInt(num2)))
            break;
        case "2":
            console.log('Resultado: '+calculadora.resta(parseInt(num1),parseInt(num2)))
            break;
        case "3":
            console.log('Resultado: '+calculadora.multiplicacion(parseInt(num1),parseInt(num2)))
            break;
        case "4":
            console.log('Resultado: '+calculadora.division(parseInt(num1),parseInt(num2)))
            break;
        case "5":
            console.log('Resultado: '+calculadora.modulo(parseInt(num1),parseInt(num2)))
            break;
        default:
            console.log('Opcion invalida');
            break salir;
    }
}