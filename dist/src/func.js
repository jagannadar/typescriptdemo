"use strict";
function calTax(income, taxYear) {
    if ((taxYear || 2011) < 2012)
        return income * 2000;
    return income * 10000;
}
calTax(10000);
//# sourceMappingURL=func.js.map