function SingletonRick(clone) {
    clone = typeof clone !== 'undefined' ?  clone : false;
    if(!this.instance) {
        this.instance = Object.create(rick);
        this.instance.id = "C-137";
    }
    else if(clone) {
        let cloneRick = Object.create(rick);
        cloneRick.id = Math.floor(Math.random() * (1000 - 137) + 137);
        return cloneRick;
    }
    return this.instance;
}

const rick = {
    ondas: "altas",
    habla: "Es Rick-dículo!"
};


module.exports = {
    SingletonRick: SingletonRick,
};


