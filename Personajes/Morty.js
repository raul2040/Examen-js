const importModules  = require("./Rick");

let protoRick = importModules.SingletonRick();

function SingletonMorty(clone) {
    clone = typeof clone !== 'undefined' ?  clone : false;
    if(!this.instance) {
        this.instance = Object.create(Morty);
        this.instance.id = "earthMorty";
    }
    else if(clone) {
        let cloneMorty = Object.create(Morty);
        cloneMorty.id = Math.floor(Math.random() * (1000 - 137) + 137);
        return cloneMorty;
    }
    return this.instance;
}

const Morty = {
    ondas: "bajas",
    habla: "Oohh man!",
    partner: protoRick
};


module.exports = {
    SingletonMorty: SingletonMorty,
};