export class StrategyDTO {
    private country: string;
    private basicFilter: string;
    private excludeSectors: string;
    private factorRatio: number;
    private factorPrice: number;
    private factorEV: number;
    private factorQuality: number;
    private initialAmount: number;
    private fee: number;
    private rebalancingPeriod: number;
    private eventCount: number;
    private marketTiming: string;

    constructor(
        country: string,
        basicFilter: string,
        excludeSectors: string,
        factorRatio: number,
        factorPrice: number,
        factorEV: number,
        factorQuality: number,
        initialAmount: number,
        fee: number,
        rebalancingPeriod: number,
        eventCount: number,
        marketTiming: string
    ) {
        this.country = country; // 선택된 국가
        this.basicFilter = basicFilter;
        this.excludeSectors = excludeSectors; // 제외할 섹터들
        this.factorRatio = factorRatio;
        this.factorPrice = factorPrice;
        this.factorEV = factorEV;
        this.factorQuality = factorQuality;
        this.initialAmount = initialAmount;
        this.fee = fee;
        this.rebalancingPeriod = rebalancingPeriod;
        this.eventCount = eventCount;
        this.marketTiming = marketTiming;
    }

    setStrategy(
        country: string,
        basicFilter: string,
        excludeSectors: string,
        factorRatio: number,
        factorPrice: number,
        factorEV: number,
        factorQuality: number,
        initialAmount: number,
        fee: number,
        rebalancingPeriod: number,
        eventCount: number,
        marketTiming: string
    ) {
        this.country = country; // 선택된 국가
        this.basicFilter = basicFilter;
        this.excludeSectors = excludeSectors; // 제외할 섹터들
        this.factorRatio = factorRatio;
        this.factorPrice = factorPrice;
        this.factorEV = factorEV;
        this.factorQuality = factorQuality;
        this.initialAmount = initialAmount;
        this.fee = fee;
        this.rebalancingPeriod = rebalancingPeriod;
        this.eventCount = eventCount;
        this.marketTiming = marketTiming;
    }
}
