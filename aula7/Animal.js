"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Cat = exports.Dog = exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(habitat) {
        this.habitat = habitat;
        Animal.nAnimals++;
    }
    Animal.prototype.show = function () {
        return "There is " + Animal.nAnimals + " animals in the " + this.habitat + "habitat!";
    };
    Animal.nAnimals = 0;
    return Animal;
}());
exports.Animal = Animal;
var Reptile = /** @class */ (function (_super) {
    __extends(Reptile, _super);
    function Reptile(habitat) {
        return _super.call(this, habitat) || this;
    }
    return Reptile;
}(Animal));
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal(habitat) {
        var _this = _super.call(this, habitat) || this;
        Mammal.nMammals++;
        return _this;
    }
    Mammal.prototype.show = function () {
        return "There is " + Mammal.nMammals + " mammals in the " + this.habitat + " habitat!";
    };
    Mammal.nMammals = 0;
    return Mammal;
}(Animal));
var Canine = /** @class */ (function (_super) {
    __extends(Canine, _super);
    function Canine(habitat, race) {
        var _this = _super.call(this, habitat) || this;
        _this.race = race;
        Canine.nCanines++;
        return _this;
    }
    Canine.nCanines = 0;
    return Canine;
}(Mammal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(habitat, race, bark) {
        var _this = _super.call(this, habitat, race) || this;
        _this.bark = bark;
        Dog.nDogs++;
        return _this;
    }
    Dog.prototype.talk = function () {
        return "The sound made is: " + this.bark;
    };
    Dog.nDogs = 0;
    return Dog;
}(Canine));
exports.Dog = Dog;
var Feline = /** @class */ (function (_super) {
    __extends(Feline, _super);
    function Feline(habitat, family) {
        var _this = _super.call(this, habitat) || this;
        _this.family = family;
        Feline.nFelines++;
        return _this;
    }
    Feline.nFelines = 0;
    return Feline;
}(Mammal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(habitat, family, name, meow) {
        var _this = _super.call(this, habitat, family) || this;
        _this.name = name;
        _this.family = family;
        _this.meow = meow;
        Cat.nCats++;
        return _this;
    }
    Cat.prototype.talk = function () {
        return "The sound made is: " + this.meow;
    };
    Cat.nCats = 0;
    return Cat;
}(Feline));
exports.Cat = Cat;
