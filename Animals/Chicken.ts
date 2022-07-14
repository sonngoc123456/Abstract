import {Animal} from "./Animal";
import {Edible} from "./Edible";

export class Chicken extends Animal implements Edible {
    makeSound() : string {
        return 'Chicken : cục tác';
    }
    howtoEat(): string {
        return 'could be fried'
    }
}