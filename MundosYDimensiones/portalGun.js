const gun = {
    historial: [],
    shoot: function (mundo) {
        this.historial.push(mundo)
    }
};

module.exports  = {
    ThePortalGun: gun
};