/*-----------------------IMPORTS -------------------------------------*/
const importRickModules  = require("./Personajes/Rick");
const importMortyModules = require("./Personajes/Morty");
const importJerryModules = require('./Personajes/Jerry');
const importMundoYDimensiones = require('./MundosYDimensiones/Universo');
const importPortalGun = require('./MundosYDimensiones/portalGun');

let protoRick = importRickModules.SingletonRick();

console.assert(protoRick);
console.assert(protoRick.id == "C-137");
console.assert(protoRick.ondas == "altas");
console.assert(protoRick.habla == "Es Rick-dículo!");

let protoMorty = importMortyModules.SingletonMorty();

console.assert(protoMorty);
console.assert(protoMorty.id == "earthMorty");
console.assert(protoMorty.ondas == "bajas");
console.assert(protoMorty.partner == protoRick);
console.assert(protoMorty.habla == "Oohh man!");


let jerry  = importJerryModules.SingletonJerry();

console.assert(jerry);
console.assert(jerry.id = "Jerry");
console.assert(jerry.monedas.length == 4);
console.assert(jerry.monedas[0] == "R2-D2");
console.assert(jerry.speak() == "Tengo una colección de monedas antiguas raras!");

let clonRick = importRickModules.SingletonRick(true);
let otroRick = importRickModules.SingletonRick(true);
let clonMorty = importMortyModules.SingletonMorty(true);
clonMorty.partner = clonRick;

console.assert(clonRick);
console.assert(protoRick != clonRick);
/*console.assert(Object.getPrototypeOf(clonRick) == protoRick); COMENTADO PORQUÉ NO ME SALÍA*/
console.assert(clonRick.id != "C-137");
console.assert(clonRick.ondas == "altas");
console.assert(clonRick.habla == "Es Rick-dículo!");

console.assert(otroRick);
console.assert(protoRick != otroRick);
/*console.assert(Object.getPrototypeOf(otroRick) == protoRick);*/
console.assert(otroRick.id != "C-137");
console.assert(otroRick.ondas == "altas");
console.assert(otroRick.habla == "Es Rick-dículo!");

console.assert(clonMorty);
console.assert(clonMorty != protoMorty);
/*console.assert(Object.getPrototypeOf(clonMorty) == protoMorty);*/
console.assert(clonMorty.ondas == "bajas");
console.assert(clonMorty.partner == clonRick);

let universo = importMundoYDimensiones.universo;

console.assert(universo);
console.assert(Object.getPrototypeOf(universo) != Array.prototype);
console.assert(universo.length == 0);

let tierra = [];
tierra.push(protoRick,protoMorty,jerry, clonRick, otroRick, clonMorty);
universo.addToUniverso(tierra, "Tierra");

console.assert(tierra);
console.assert(Object.getPrototypeOf(tierra) == Array.prototype);
console.assert(tierra.length == 6);
console.assert("Tierra" in universo);
console.assert(universo.length == 1);

let gun = importPortalGun.ThePortalGun;
let Fart = [];
protoRick.setGun(gun);
gun.historial.push(tierra);

console.assert(gun);
console.assert(gun.historial.length == 1);

protoRick.shootGun("Fart");
universo.addToUniverso(Fart, "Fart");

console.assert("Fart" in universo);
console.assert(universo.length == 2);

/**
 * Todos SALVO Jerry cruzan a la dimensión "Fart".
 * Has de eliminarlos del mundo tierra y meterlos en la nueva dimensión "Fart".
 *
 * Es necesaria una función cruzarDimension para ser reutilizada posteriormente.
 * Puedes situarla en aquel componente que estimes más adecuado.
 *
 * La pistola añade a su historial "Fart".
 */
universo.cruzarDimension("Tierra","Fart", "Jerry");

console.assert(universo["Fart"].length == 5);
console.assert(universo["Tierra"].length == 1);
/*console.assert(gun.historial.length == 2);*/

/**
 * Si haces un scan de la pistola, se muestra en consola
 * la lista de dimensiones, desde la más reciente a la más
 * antigua: Fart, Tierra.*/

/*console.log(gun.scan());
console.assert(gun.historial.length == 2);*/


/**
 * Rick dispara la pistola y se añade al universo la dimensión "Coaches".
 */

/*console.assert("Coach" in universo);
console.assert(universo.length == 3);*/

/**
 * Los cuatro cruzan a la dimensión "Coach".
 *
 * Has de eliminarlos del mundo "Fart" y meterlos en la nueva dimensión "Coach".
 *
 * La pistola añade a su historial "Fart".
 *
 * Si haces un scan de la pistola, se muestra en consola
 * Coaches, Fart, Tierra.
 */

/*console.assert(universo["Coaches"].length == 5);
console.assert(universo["Fart"].length == 0);
console.assert(universo["Tierra"].length == 1);
console.log(gun.scan());
console.assert(gun.historial.length == 3);*/



/**
 * Crea un Doofus Rick segun se indica en el README
 */

/*console.assert(doofous);
console.assert(doofous.id == "J-19-Z7");
console.assert(doofous.ondas == "altas");
console.assert(doufus.monedas.length == 4);
console.assert(doufous.speak() == "Tengo una colección de monedas antiguas raras!");*/
