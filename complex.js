var Complex = /** @class */ (function () {
    function Complex(rzeczywsita, urojona) {
        this.rzeczywista = rzeczywsita;
        this.urojona = urojona;
    }
    Complex.prototype.Add = function (obj) {
        return new Complex(this.rzeczywista + obj.rzeczywista, this.urojona + obj.urojona);
    };
    Complex.prototype.Substract = function (obj) {
        return new Complex(this.rzeczywista - obj.rzeczywista, this.urojona - obj.urojona);
    };
    Complex.prototype.Modul = function () {
        return Math.sqrt((this.rzeczywista * this.rzeczywista) + (this.urojona * this.urojona));
    };
    Complex.prototype.toString = function () {
        return this.rzeczywista + "+" + this.urojona + "i";
    };
    return Complex;
}());
var obj = new Complex(3, 2);
var obj1 = new Complex(2, 1);
var obj2 = obj.Add(obj1);
var obj3 = obj.Substract(obj1);
var obj4 = obj.Modul();
console.log("Add = " + obj2);
console.log("Substract = " + obj3);
console.log("Modul = " + obj4);
