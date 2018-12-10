const universo = {
    length: 0,
    addToUniverso: function(mundo, nameMundo) {
        this.length++;
        universo[nameMundo] = mundo;
    }
};

module.exports = {
    universo: universo,
};