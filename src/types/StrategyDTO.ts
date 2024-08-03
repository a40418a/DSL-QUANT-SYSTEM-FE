export class StrategyCommonDTO {
    //공통
    initialInvestment: number;
    tax: number;
    startDate: string;
    endDate: string;
    targetItem: string;
    candleType: string;
    inqRange: number;
    strategy: string;

    constructor(data: {
        initialInvestment: number;
        tax: number;
        startDate: string;
        endDate: string;
        targetItem: string;
        candleType: string;
        inqRange: number;
        strategy: string;
    }) {
        this.initialInvestment = data.initialInvestment;
        this.tax = data.tax;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.targetItem = data.targetItem;
        this.candleType = data.candleType;
        this.inqRange = data.inqRange;
        this.strategy = data.strategy;
    }

    getCommon(): string {
        return `${this.initialInvestment} - ${this.tax} - ${this.startDate} - ${this.endDate} - ${this.targetItem} - ${this.candleType} - ${this.inqRange} - ${this.strategy}`;
    }
}

export class Strategy1DTO {
    //골든/데드
    fastMoveAvg: number;
    slowMoveAvg: number;

    constructor(data: { fastMoveAvg: number; slowMoveAvg: number }) {
        this.fastMoveAvg = data.fastMoveAvg;
        this.slowMoveAvg = data.slowMoveAvg;
    }

    getGoldenDead(): string {
        return `${this.fastMoveAvg} - ${this.slowMoveAvg}`;
    }
}

export class Strategy2DTO {
    //볼린저
    moveAvg: number;

    constructor(data: { moveAvg: number }) {
        this.moveAvg = data.moveAvg;
    }

    getBollinger(): string {
        return `${this.moveAvg}`;
    }
}

export class Strategy3DTO {
    //RSI,MFI,MACD
    rsiStart: string;
    rsiEnd: string;
    mfiLoopCount: number;

    constructor(data: { rsiStart: string; rsiEnd: string; mfiLoopCount: number }) {
        this.rsiStart = data.rsiStart;
        this.rsiEnd = data.rsiEnd;
        this.mfiLoopCount = data.mfiLoopCount;
    }

    getRsiMfiMacd(): string {
        return `${this.rsiStart} - ${this.rsiEnd} - ${this.mfiLoopCount}`;
    }
}
