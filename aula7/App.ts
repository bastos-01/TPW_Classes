import {Cat} from "./Animal";
import {Dog} from "./Animal";
import {Animal} from "./Animal";

let d = new Dog("dentro do daniel", "danielito", "aunaunaun");
console.log(d.talk());
console.log(d.show());
console.log(Dog.nCanines);

let c = new Cat( "casa do daniel","persa", "gil", "bxbxbxbx");
console.log(c.talk());
console.log(c.show());

