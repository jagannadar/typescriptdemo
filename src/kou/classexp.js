var Mobile = /** @class */ (function () {
    function Mobile(model, modelNum) {
        this.model = model;
        this.modelNum = modelNum;
    }
    Mobile.prototype.makeCall = function () {
        console.log('hey');
        return 'hey';
    };
    return Mobile;
}());
var mobile = new Mobile('iphone', 12);
console.log(mobile.model);
mobile.makeCall();
