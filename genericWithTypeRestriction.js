var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(engineSize) {
        this.engineSize = engineSize;
    }
    return Car;
}());
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(engineSize) {
        return _super.call(this, engineSize) || this;
    }
    return BMW;
}(Car));
var Porsche = /** @class */ (function (_super) {
    __extends(Porsche, _super);
    function Porsche(engineSize) {
        return _super.call(this, engineSize) || this;
    }
    return Porsche;
}(Car));
var PrintDetails = function (make, description) {
    console.log(description + make.engineSize);
};
var bmw = new BMW(1998);
PrintDetails(bmw, 'BMW with Enginesize');
var porsche = new Porsche(3595);
PrintDetails(porsche, 'Porsche with Engine size');
