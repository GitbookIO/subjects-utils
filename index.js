var BISAC = require("./data/bisac.json");

// Return a bisac subject by its code
var getByCode = function(code) {
    for (var i in BISAC) {
        var subject = BISAC[i];
        if (subject.code == code) {
            return subject;
        }
    }
    return null;
};

// Return a bisac subject by its label
var getByLabel = function(code) {
    code = code.toLowerCase();
    for (var i in BISAC) {
        var subject = BISAC[i];
        if (subject.label.toLowerCase() == code) {
            return subject;
        }
    }
    return null;
};

module.exports = {
    byCode: getByCode,
    byLabel: getByLabel,
    all: {
        bisac: BISAC
    }
};
