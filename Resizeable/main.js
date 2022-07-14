"use strict";
exports.__esModule = true;
var Rectangle_1 = require("./Rectangle");
var Circle_1 = require("./Circle");
var shapes = [];
shapes[0] = new Rectangle_1.Rectangle(10, 20, 'ck');
console.log(shapes[0].getArea());
shapes[1] = new Circle_1.Circle('bi', 20);
console.log(shapes[1].getArea());
