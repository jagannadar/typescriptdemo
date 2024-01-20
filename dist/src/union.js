"use strict";
function kgtolb(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.3;
    }
}
console.log(kgtolb(5));
//# sourceMappingURL=union.js.map