const importModules  = require("./Rick");

let protoRick = importModules.SingletonRick();

function SingletonJerry() {
    if(!this.instance) {
        this.instance = Object.create(Jerry);
    }
    return this.instance;
}

const Jerry = {
    id: "Jerry",
    ondas: "bajas",
    monedas: ["R2-D2", "COIN","COIN","COIN"],
    speak: function() {
        return("Tengo una colección de monedas antiguas raras!");
    }
};


module.exports = {
    SingletonJerry: SingletonJerry,
};