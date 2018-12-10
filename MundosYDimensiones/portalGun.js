const gun = {
    historial: [],
    shoot: function (mundo) {
        this.historial.push(mundo)
    },
    scan: function () {
        var showHistory = "";
        var copyToIterate = this.historial.reverse();
        for(let x=0; x<copyToIterate.length; x++) {
            showHistory += " " + copyToIterate[x] + " "
        }
        return showHistory
    }
};

module.exports  = {
    ThePortalGun: gun
};