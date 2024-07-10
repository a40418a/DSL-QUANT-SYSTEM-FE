export class StrategyCommonDTO {
    //공통
    initialInvestment: number;
    commission: number;
    startDate: string;
    endDate: string;
    targetItem: string;
    candleType: string;
    inqRangeStart: string;
    inqRangeEnd: string;

    constructor(data: {
        initialInvestment: number;
        commission: number;
        startDate: string;
        endDate: string;
        targetItem: string;
        candleType: string;
        inqRangeStart: string;
        inqRangeEnd: string;
    }) {
        this.initialInvestment = data.initialInvestment;
        this.commission = data.commission;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.targetItem = data.targetItem;
        this.candleType = data.candleType;
        this.inqRangeStart = data.inqRangeStart;
        this.inqRangeEnd = data.inqRangeEnd;
    }
}

export class Strategy1DTO {
    //골든/데드
    fastMoveAvgStart: string;
    fastMoveAvgEnd: string;
    slowMoveAvgStart: string;
    slowMoveAvgEnd: string;

    constructor(data: {
        fastMoveAvgStart: string;
        fastMoveAvgEnd: string;
        slowMoveAvgStart: string;
        slowMoveAvgEnd: string;
    }) {
        this.fastMoveAvgStart = data.fastMoveAvgStart;
        this.fastMoveAvgEnd = data.fastMoveAvgEnd;
        this.slowMoveAvgStart = data.slowMoveAvgStart;
        this.slowMoveAvgEnd = data.slowMoveAvgEnd;
    }
}

export class Strategy2DTO {
    //볼린저
    moveAvgStart: string;
    moveAvgEnd: string;

    constructor(data: { moveAvgStart: string; moveAvgEnd: string }) {
        this.moveAvgStart = data.moveAvgStart;
        this.moveAvgEnd = data.moveAvgEnd;
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
