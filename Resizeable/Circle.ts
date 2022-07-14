import {Shape} from "./Shape";
import {Resizeable} from "./Resizeable";

export class Circle extends Shape implements Resizeable {
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    resize(): number {
        return this.radius + (this.radius*Math.floor((Math.random()*100) + 1)/100);
    }

    getArea(): number {
        return Math.PI * Math.pow(this.resize(), 2);
    }

    getPerimeter(): number {
        return Math.PI * this.radius * 2;
    }

}
