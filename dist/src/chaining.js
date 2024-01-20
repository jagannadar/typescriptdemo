"use strict";
var _a;
function getCustomer(id) {
    return id === 0 ? null : { birth: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birth) === null || _a === void 0 ? void 0 : _a.getFullYear);
//# sourceMappingURL=chaining.js.map