function SingletonRick() {
    if(!this.instance) {
        this.instance = Object.create(rick);
    }
    return this.instance;
}

const rick = {
    id: "C-137",
    ondas: "altas",
    habla: "Es Rick-dículo!"
};


module.exports = {
    singletonRick: SingletonRick,
};


