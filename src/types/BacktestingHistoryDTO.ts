//백테스팅 검색 기록
export class BackTestingHistory {
    id: string;
    date: string;
    initialInvestment: number;
    tax: number;
    startDate: string;
    endDate: string;
    targetItem: string;
    candleType: string;
    inqRange: number;
    strategy: string;
    fileHtml: string;

    constructor(data: {
        id: string;
        date: string;
        initialInvestment: number;
        tax: number;
        startDate: string;
        endDate: string;
        targetItem: string;
        candleType: string;
        inqRange: number;
        strategy: string;
        fileHtml: string;
    }) {
        this.id = data.id;
        this.date = data.date;
        this.initialInvestment = data.initialInvestment;
        this.tax = data.tax;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.targetItem = data.targetItem;
        this.candleType = data.candleType;
        this.inqRange = data.inqRange;
        this.strategy = data.strategy;
        this.fileHtml = data.fileHtml;
    }

    getBacktestingInfo(): string {
        return `${this.id} - ${this.date} - ${this.initialInvestment} - ${this.tax} - ${this.startDate} - ${this.endDate} - ${this.targetItem} - ${this.candleType} - ${this.inqRange} - ${this.strategy} - ${this.fileHtml}`;
    }
}
