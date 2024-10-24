export class StrategyCommonDTO {
    //공통
    initial_investment: number;
    tax: number;
    target_item: string;
    tick_kind: string;
    inq_range: number;
    strategy: string;

    constructor(data: {
        initial_investment: number;
        tax: number;
        target_item: string;
        tick_kind: string;
        inq_range: number;
        strategy: string;
    }) {
        this.initial_investment = data.initial_investment;
        this.tax = data.tax;
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

    constructor(data: { slowMoveAvg: number; fastMoveAvg: number }) {
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
    rsiPeriod: number;

    constructor(data: { rsiPeriod: number }) {
        this.rsiPeriod = data.rsiPeriod;
    }
}

export class StrategyEnvDTO {
    moving_up: number;
    moving_down: number;
    movingAveragePeriod: number;

    constructor(data: { moving_up: number; moving_down: number; movingAveragePeriod: number }) {
        this.moving_up = data.moving_up;
        this.moving_down = data.moving_down;
        this.movingAveragePeriod = data.movingAveragePeriod;
    }
}

export class StrategyWDTO {
    //RSI,MFI,MACD
    williamsPeriod: number;

    constructor(data: { williamsPeriod: number }) {
        this.williamsPeriod = data.williamsPeriod;
    }
}

export class MultiStrategyDTO {
    // 공통 전략 정보
    userId: number;
    second_strategy: string;

    // 수익률 비율
    profitVsRate: number; // 첫 전략 기준 2번째 전략과의 수익률 비율 결과
    finalProfitRate: number; // 복합 최종 수익률

    // Bollinger Bands 정보
    moveAvg: number;

    // Envelope 전략 정보
    moving_up: number;
    moving_down: number;
    movingAveragePeriod: number;

    // Golden/Dead Cross 전략 정보
    fastMoveAvg: number;
    slowMoveAvg: number;

    // RSI 정보
    rsiPeriod: number;

    // Williams 전략 정보
    williamsPeriod: number;

    // 두 번째 전략 결과 정보
    second_finalCash: number;
    second_finalAsset: number;
    second_finalBalance: number;
    second_profit: number;
    second_profitRate: number;
    second_numberOfTrades: number;

    constructor(data: {
        userId: number;
        second_strategy: string;
        profitVsRate: number;
        finalProfitRate: number;
        moveAvg: number;
        moving_up: number;
        moving_down: number;
        movingAveragePeriod: number;
        fastMoveAvg: number;
        slowMoveAvg: number;
        rsiPeriod: number;
        williamsPeriod: number;
        second_finalCash: number;
        second_finalAsset: number;
        second_finalBalance: number;
        second_profit: number;
        second_profitRate: number;
        second_numberOfTrades: number;
    }) {
        this.userId = data.userId;
        this.second_strategy = data.second_strategy;
        this.profitVsRate = data.profitVsRate;
        this.finalProfitRate = data.finalProfitRate;
        this.moveAvg = data.moveAvg;
        this.moving_up = data.moving_up;
        this.moving_down = data.moving_down;
        this.movingAveragePeriod = data.movingAveragePeriod;
        this.fastMoveAvg = data.fastMoveAvg;
        this.slowMoveAvg = data.slowMoveAvg;
        this.rsiPeriod = data.rsiPeriod;
        this.williamsPeriod = data.williamsPeriod;
        this.second_finalCash = data.second_finalCash;
        this.second_finalAsset = data.second_finalAsset;
        this.second_finalBalance = data.second_finalBalance;
        this.second_profit = data.second_profit;
        this.second_profitRate = data.second_profitRate;
        this.second_numberOfTrades = data.second_numberOfTrades;
    }
}