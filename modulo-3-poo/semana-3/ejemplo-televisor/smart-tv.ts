import Televisor from "./televisor";

export default class SmartTV extends Televisor {
    public constructor() {
        super(); 

        this.canalActual = 1;
    }

    public mirarNetflix(): void {
        console.log('Mirando Netflix...');
    }
}