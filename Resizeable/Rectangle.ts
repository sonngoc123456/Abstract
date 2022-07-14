import {Shape} from "./Shape";
import {Resizeable} from "./Resizeable";

export class Rectangle extends Shape implements Resizeable {
    width: number;
    height: number;

    constructor(width: number,
                height: number,
                name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }

    resize(): number {
        return (this.width*this.height)+(this.width*this.height)*(Math.floor(Math.random()*100) + 1)/100
    }

    getArea(): number {
        return this.resize();
    }

    getPerimeter(): number {
        return (this.width + this.height) * 2;
    }
}
