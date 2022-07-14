import {Rectangle} from "./Rectangle";
import {Circle} from "./Circle";
let shapes = [];
 shapes[0] = new Rectangle(10,20,'ck');
console.log(shapes[0].getArea());
shapes[1] = new Circle('bi',20);
console.log(shapes[1].getArea());