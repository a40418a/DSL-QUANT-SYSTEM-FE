//결과화면
export class ResultDTO {
    //공통
    initialInvestment: number;
    tax: number;
    startDate: string;
    endDate: string;
    targetItem: string;
    candleType: string;
    inqRange: number;
    strategy: string;

    //골든/데드
    fastMoveAvg: number;
    slowMoveAvg: number;

    //볼린저
    moveAvg: number;

    //RSI,MFI,MACD
    rsiStart: string;
    rsiEnd: string;
    mfiLoopCount: number;

    //파일
    fileHtml: string;

    constructor(data: {
        initialInvestment: number;
        tax: number;
        startDate: string;
        endDate: string;
        targetItem: string;
        candleType: string;
        inqRange: number;
        strategy: string;
        fastMoveAvg: number;
        slowMoveAvg: number;
        moveAvg: number;
        rsiStart: string;
        rsiEnd: string;
        mfiLoopCount: number;
        fileHtml: string;
    }) {
        this.initialInvestment = data.initialInvestment;
        this.tax = data.tax;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.targetItem = data.targetItem;
        this.candleType = data.candleType;
        this.inqRange = data.inqRange;
        this.strategy = data.strategy;
        this.fastMoveAvg = data.fastMoveAvg;
        this.slowMoveAvg = data.slowMoveAvg;
        this.moveAvg = data.moveAvg;
        this.rsiStart = data.rsiStart;
        this.rsiEnd = data.rsiEnd;
        this.mfiLoopCount = data.mfiLoopCount;
        this.fileHtml = data.fileHtml;
    }

    setfileHtml(fileHtml: string) {
        this.fileHtml = fileHtml;
    }

    getfileHtml(): string {
        return `${this.fileHtml}`;
    }

    getResult(): string {
        return `${this.initialInvestment} - ${this.tax} - ${this.startDate} - ${this.endDate} - ${this.targetItem} - ${this.candleType} - ${this.inqRange} - ${this.strategy} - ${this.fastMoveAvg} - ${this.slowMoveAvg} - ${this.moveAvg} - ${this.rsiStart} - ${this.rsiEnd} - ${this.mfiLoopCount} - ${this.fileHtml}`;
    }
}
