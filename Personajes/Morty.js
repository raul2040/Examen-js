const importModules  = require("./Rick");

let protoRick = importModules.singletonRick();

function SingletonMorty() {
    if(!this.instance) {
        this.instance = Object.create(Morty);
    }
    return this.instance;
}

const Morty = {
    id: "earthMorty",
    ondas: "bajas",
    habla: "Oohh man!",
    partner: protoRick
};


module.exports = {
    SingletonMorty: SingletonMorty,
};