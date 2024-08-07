export class StrategyCommonDTO {
    //공통
    initial_investment: number;
    tax: number;
    start_date: string;
    end_date: string;
    target_item: string;
    tick_kind: string;
    inq_range: number;
    strategy: string;

    constructor(data: {
        initial_investment: number;
        tax: number;
        start_date: string;
        end_date: string;
        target_item: string;
        tick_kind: string;
        inq_range: number;
        strategy: string;
    }) {
        this.initial_investment = data.initial_investment;
        this.tax = data.tax;
        this.start_date = data.start_date;
        this.end_date = data.end_date;
        this.target_item = data.target_item;
        this.tick_kind = data.tick_kind;
        this.inq_range = data.inq_range;
        this.strategy = data.strategy;
    }

}

export class StrategyGoldenDTO {
    //골든/데드
    fastMoveAvg: number;
    slowMoveAvg: number;

    constructor(data: {
        slowMoveAvg: number;
        fastMoveAvg: number; }) {
        this.fastMoveAvg = data.fastMoveAvg;
        this.slowMoveAvg = data.slowMoveAvg;
    }

}

export class StrategyBollingerDTO {
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
