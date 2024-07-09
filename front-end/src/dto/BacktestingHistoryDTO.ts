export class BackTestingHistory {
    private id: string;
    private date: string;
    private universe: string;
    private weight: string;
    private initialInvestment: number;
    private period: string;
    private fileHtml: string;

    constructor(
        id: string,
        date: string,
        universe: string,
        weight: string,
        initialInvestment: number,
        period: string,
        fileHtml: string
    ) {
        this.id = id;
        this.date = date;
        this.universe = universe;
        this.weight = weight;
        this.initialInvestment = initialInvestment;
        this.period = period;
        this.fileHtml = fileHtml;
    }

    getBacktestingInfo(): string {
        return `${this.id} - ${this.date} - ${this.universe} - ${this.weight}-${this.initialInvestment}-${this.period}-${this.fileHtml}`;
    }
}
