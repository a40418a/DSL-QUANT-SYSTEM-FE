export class StrategyDTO {
    private country: string;
    private basicFilter: string[];
    private excludeSectors: string[];
    private factorRatio: string;
    private factorPrice: string[];
    private factorEV: string[];
    private factorQuality: string[];
    private initialAmount: number;
    private fee: number;
    private rebalancingPeriod: string;
    private specificGravity: string;
    private eventCount: number;
    private marketTiming: string[];
    private datePeriod: string[];

    constructor(
        country: string,
        basicFilter: string[],
        excludeSectors: string[],
        factorRatio: string,
        factorPrice: string[],
        factorEV: string[],
        factorQuality: string[],
        initialAmount: number,
        fee: number,
        rebalancingPeriod: string,
        specificGravity: string,
        eventCount: number,
        marketTiming: string[],
        datePeriod: string[]
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
        this.specificGravity = specificGravity;
        this.eventCount = eventCount;
        this.marketTiming = marketTiming;
        this.datePeriod = datePeriod;
    }

    setCountry(country: string) {
        this.country = country;
    }
    setBasicFilter(basicFilter: string[]) {
        this.basicFilter = basicFilter;
    }
    setExcludeSectors(excludeSectors: string[]) {
        this.excludeSectors = excludeSectors;
    }
    setFactorRatio(factorRatio: string) {
        this.factorRatio = factorRatio;
    }
    setFactorPrice(factorPrice: string[]) {
        this.factorPrice = factorPrice;
    }
    setFactorEV(factorEV: string[]) {
        this.factorEV = factorEV;
    }
    setFactorQuality(factorQuality: string[]) {
        this.factorQuality = factorQuality;
    }
    setInitialAmount(initialAmount: number) {
        this.initialAmount = initialAmount;
    }
    setFee(fee: number) {
        this.fee = fee;
    }
    setRebalancingPeriod(rebalancingPeriod: string) {
        this.rebalancingPeriod = rebalancingPeriod;
    }
    setSpecificGravity(specificGravity: string) {
        this.specificGravity = specificGravity;
    }
    setEventCount(eventCount: number) {
        this.eventCount = eventCount;
    }
    setMarketTiming(marketTiming: string[]) {
        this.marketTiming = marketTiming;
    }
    setDatePeriod(datePeriod: string[]) {
        this.datePeriod = datePeriod;
    }

    getStrategy() {
        return {
            country: this.country,
            basicFilter: this.basicFilter,
            excludeSectors: this.excludeSectors,
            factorRatio: this.factorRatio,
            factorPrice: this.factorPrice,
            factorEV: this.factorEV,
            factorQuality: this.factorQuality,
            initialAmount: this.initialAmount,
            fee: this.fee,
            rebalancingPeriod: this.rebalancingPeriod,
            specificGravity: this.specificGravity,
            eventCount: this.eventCount,
            marketTiming: this.marketTiming,
            datePeriod: this.datePeriod,
        };
    }
}
