class StrategyDTO {
    constructor(
        country,
        basicFilter,
        excludeSectors,
        factorRatio,
        factorPrice,
        factorEV,
        factorQuality,
        initialAmount,
        fee,
        rebalancingPeriod,
        eventCount,
        marketTiming
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

export { StrategyDTO };
