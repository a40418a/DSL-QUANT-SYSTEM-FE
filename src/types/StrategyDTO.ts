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

}

export class StrategyGoldenDTO {
    //골든/데드
    fastMoveAvg: number;
    slowMoveAvg: number;

    constructor(data: { fastMoveAvg: number; slowMoveAvg: number }) {
        this.fastMoveAvg = data.fastMoveAvg;
        this.slowMoveAvg = data.slowMoveAvg;
    }

}

export class StrategyBolligerDTO {
    //볼린저
    moveAvg: number;

    constructor(data: { moveAvg: number }) {
        this.moveAvg = data.moveAvg;
    }
}

export class StrategyRsiDTO {
    //RSI,MFI,MACD
    rsiStart: string;
    rsiEnd: string;
    mfiLoopCount: number;

    constructor(data: { rsiStart: string; rsiEnd: string; mfiLoopCount: number }) {
        this.rsiStart = data.rsiStart;
        this.rsiEnd = data.rsiEnd;
        this.mfiLoopCount = data.mfiLoopCount;
    }

}
