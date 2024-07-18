export class StrategyCommonDTO {
    //공통
    initialInvestment: number;
    commission: string;
    startDate: string;
    endDate: string;
    targetItem: string;
    candleType: string;
    inqRange: number;

    constructor(data: {
        initialInvestment: number;
        commission: string;
        startDate: string;
        endDate: string;
        targetItem: string;
        candleType: string;
        inqRange: number;
    }) {
        this.initialInvestment = data.initialInvestment;
        this.commission = data.commission;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.targetItem = data.targetItem;
        this.candleType = data.candleType;
        this.inqRange = data.inqRange;
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
}

export class Strategy2DTO {
    //볼린저
    moveAvg: number;

    constructor(data: { moveAvg: number }) {
        this.moveAvg = data.moveAvg;
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
}
