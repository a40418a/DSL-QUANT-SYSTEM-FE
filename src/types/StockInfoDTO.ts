//주식 랭킹 정보
export class Top20 {
    rank: string;
    stockName: string;
    presnetPrice: string;
    alldayRatio: number;
    percentChange: number;

    constructor(data: {
        rank: string;
        stockName: string;
        presnetPrice: string;
        alldayRatio: number;
        percentChange: number;
    }) {
        this.rank = data.rank;
        this.stockName = data.stockName;
        this.presnetPrice = data.presnetPrice;
        this.alldayRatio = data.alldayRatio;
        this.percentChange = data.percentChange;
    }

    getTop20(): string {
        return `${this.rank} - ${this.stockName} - ${this.presnetPrice} - ${this.alldayRatio} - ${this.percentChange}`;
    }
}

//주식 차트 정보
export class Kospi {
    date: string;
    closingPrice: number;
    openingPrice: number;
    highPrice: number;
    lowPrice: number;
    tradingVolume: string;
    fluctuationRate: string;
    kospiData: { time: string; value: number }[];

    constructor(data: {
        date: string;
        closingPrice: number;
        openingPrice: number;
        highPrice: number;
        lowPrice: number;
        tradingVolume: string;
        fluctuationRate: string;
        kospiData: { time: string; value: number }[];
    }) {
        this.date = data.date;
        this.closingPrice = data.closingPrice;
        this.openingPrice = data.openingPrice;
        this.highPrice = data.highPrice;
        this.lowPrice = data.lowPrice;
        this.tradingVolume = data.tradingVolume;
        this.fluctuationRate = data.fluctuationRate;
        this.kospiData = data.kospiData;
    }

    getKospi(): string {
        return `${this.date} - ${this.closingPrice} - ${this.openingPrice} - ${this.highPrice} - ${this.lowPrice} - ${
            this.tradingVolume
        } - ${this.fluctuationRate} - ${JSON.stringify(this.kospiData)}`;
    }
}

export class Kosdak {
    date: string;
    closingPrice: number;
    openingPrice: number;
    highPrice: number;
    lowPrice: number;
    tradingVolume: string;
    fluctuationRate: string;
    kosdakData: { time: string; value: number }[];

    constructor(data: {
        date: string;
        closingPrice: number;
        openingPrice: number;
        highPrice: number;
        lowPrice: number;
        tradingVolume: string;
        fluctuationRate: string;
        kosdakData: { time: string; value: number }[];
    }) {
        this.date = data.date;
        this.closingPrice = data.closingPrice;
        this.openingPrice = data.openingPrice;
        this.highPrice = data.highPrice;
        this.lowPrice = data.lowPrice;
        this.tradingVolume = data.tradingVolume;
        this.fluctuationRate = data.fluctuationRate;
        this.kosdakData = data.kosdakData;
    }

    getKosdak(): string {
        return `${this.date} - ${this.closingPrice} - ${this.openingPrice} - ${this.highPrice} - ${this.lowPrice} - ${
            this.tradingVolume
        } - ${this.fluctuationRate} - ${JSON.stringify(this.kosdakData)}`;
    }
}

export class Kospi200 {
    date: string;
    closingPrice: number;
    openingPrice: number;
    highPrice: number;
    lowPrice: number;
    tradingVolume: string;
    fluctuationRate: string;
    kospi200Data: { time: string; value: number }[];

    constructor(data: {
        date: string;
        closingPrice: number;
        openingPrice: number;
        highPrice: number;
        lowPrice: number;
        tradingVolume: string;
        fluctuationRate: string;
        kospi200Data: { time: string; value: number }[];
    }) {
        this.date = data.date;
        this.closingPrice = data.closingPrice;
        this.openingPrice = data.openingPrice;
        this.highPrice = data.highPrice;
        this.lowPrice = data.lowPrice;
        this.tradingVolume = data.tradingVolume;
        this.fluctuationRate = data.fluctuationRate;
        this.kospi200Data = data.kospi200Data;
    }

    getKospi200(): string {
        return `${this.date} - ${this.closingPrice} - ${this.openingPrice} - ${this.highPrice} - ${this.lowPrice} - ${
            this.tradingVolume
        } - ${this.fluctuationRate} - ${JSON.stringify(this.kospi200Data)}`;
    }
}
