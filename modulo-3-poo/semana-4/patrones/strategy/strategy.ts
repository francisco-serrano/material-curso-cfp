// 1. Define the interface of the algorithm
interface Strategy {
    solve(): void;
}

// 2. Bury implementation
abstract class StrategySolution implements Strategy {
    // 3. Template Method
    public solve(): void {
        this.start();
        
        while (this.nextTry() && !this.isSolution()) {

        }
        
        this.stop();
    }

    abstract start(): void;
    abstract nextTry(): boolean;
    abstract isSolution(): boolean;
    abstract stop(): void;
}

class FOO extends StrategySolution {
    private state: number = 1;

    public start(): void {
        console.log("Start  ");
    }

    public stop(): void {
        console.log("Stop");
    }

    public nextTry(): boolean {
        console.log("NextTry-" + this.state++ + "  ");
        return true;
    }

    public isSolution(): boolean {
        console.log("IsSolution-" + (this.state == 3) + "  ");
        return (this.state == 3);
    }
}

// 2. Bury implementation
abstract class StrategySearch implements Strategy {
    // 3. Template Method
    public solve(): void {
        while (true) {
            this.preProcess();

            if (this.search())
                break;

            this.postProcess();
        }
    }

    abstract preProcess(): void;
    abstract search(): boolean;
    abstract postProcess(): void;
}

class BAR extends StrategySearch {
    private state: number = 1;

    public preProcess(): void {
        console.log("PreProcess  ");
    }

    public postProcess(): void {
        console.log("PostProcess  ");
    }

    public search(): boolean {
        console.log("Search-" + this.state++ + "  ");
        return this.state == 3 ? true : false;
    }
}

// 4. Clients couple strictly to the interface
function execute(strategy: Strategy): void {
    strategy.solve();
}

let algorithms: Strategy[] = [new FOO(), new BAR()];
for (let i = 0; i < algorithms.length; i++) {
    execute(algorithms[i]);
}
