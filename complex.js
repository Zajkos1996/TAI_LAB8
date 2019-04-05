"use strict";
class Complex {
    constructor(rzeczywsita, urojona) {
        this.rzeczywista = rzeczywsita;
        this.urojona = urojona;
    }
    Add(obj) {
        return new Complex(this.rzeczywista + obj.rzeczywista, this.urojona + obj.urojona);
    }
    Substract(obj) {
        return new Complex(this.rzeczywista - obj.rzeczywista, this.urojona - obj.urojona);
    }
    Modul() {
        return Math.sqrt((this.rzeczywista * this.rzeczywista) + (this.urojona * this.urojona));
    }
    toString() {
        return this.rzeczywista + "+" + this.urojona + "i";
    }
}
let obj = new Complex(3, 2);
let obj1 = new Complex(2, 1);
let obj2 = obj.Add(obj1);
let obj3 = obj.Substract(obj1);
let obj4 = obj.Modul();
console.log("Add = " + obj2);
console.log("Substract = " + obj3);
console.log("Modul = " + obj4);
