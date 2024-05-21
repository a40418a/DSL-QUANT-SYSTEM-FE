export class BacktestingInfo {
    private id: string;
    private date: string;
    private universe: string;
    private weight: string;

    constructor(id: string, date: string, universe: string, weight: string) {
        this.id = id;
        this.date = date;
        this.universe = universe;
        this.weight = weight;
    }

    getBacktestingInfo(): string {
        return `${this.id} - ${this.date} - ${this.universe} - ${this.weight}`;
    }
}
