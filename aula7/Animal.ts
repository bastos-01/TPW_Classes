export abstract class Animal {
    static nAnimals : number=0;
    habitat: string;

    constructor(habitat: string) {
        this.habitat = habitat
        Animal.nAnimals++;
    }

    show() {
        return "There is " + Animal.nAnimals + " animals in the " + this.habitat + "habitat!";
    }
}

abstract class Reptile extends Animal{
    constructor(habitat: string) {
        super(habitat);
    }
}

abstract class Mammal extends Animal {
    static nMammals: number = 0;

    constructor(habitat: string) {
        super(habitat);
        Mammal.nMammals++;
    }

    show() {
        return "There is " + Mammal.nMammals + " mammals in the " + this.habitat + " habitat!";
    }

    abstract talk();

}

abstract class Canine extends Mammal{
    static nCanines: number=0;
    race:string;

    constructor(habitat: string, race:string) {
        super(habitat);
        this.race = race;
        Canine.nCanines++;
    }
}

export class Dog extends Canine{
    static nDogs: number = 0;
    bark: string;

    constructor(habitat: string, race: string, bark: string) {
        super(habitat, race);
        this.bark = bark
        Dog.nDogs++;
    }

    talk(){
        return "The sound made is: " + this.bark;
    }
}

abstract class Feline extends Mammal{
    static nFelines: number = 0;
    family: string;

    constructor(habitat:string, family: string) {
        super(habitat);
        this.family = family;
        Feline.nFelines++;
    }
}

export class Cat extends Feline{
    static nCats: number = 0;
    name: string;
    meow: string;

    constructor(habitat: string, family:string, name:string, meow:string) {
        super(habitat, family);
        this.name = name;
        this.family = family;
        this.meow = meow;
        Cat.nCats++;
    }

    talk(){
        return "The sound made is: " + this.meow;
    }
}
