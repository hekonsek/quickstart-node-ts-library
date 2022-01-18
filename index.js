"use strict";
exports.__esModule = true;
exports.SayHello = void 0;
var SayHello = /** @class */ (function () {
    function SayHello(name) {
        this.name = name;
    }
    SayHello.prototype.sayHello = function () {
        return "Hello " + this.name + "!";
    };
    return SayHello;
}());
exports.SayHello = SayHello;
