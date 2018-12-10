const universo = {
    length: 0,
    addToUniverso: function(mundo, nameMundo) {
        this.length++;
        universo[nameMundo] = mundo;
    },
    cruzarDimension: function(from, to, dontPass) {
        dontPass = typeof dontPass !== 'undefined' ?  dontPass : false;
        for(let x=0; x<this[from].length;x++) {
            if(this[from][x].id !== dontPass) {
                this[to].push(this[from][x]);
                let indice = this[from].indexOf(this[from][x]);
                this[from].splice(indice, 1);
                x--;
            }
        }
    }
};

module.exports = {
    universo: universo,
};