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
    currentPrice: number;
    alldayRatio: number;
    percentChange: number;
    kospiData: { time: string; value: number }[];

    constructor(data: {
        date: string;
        currentPrice: number;
        alldayRatio: number;
        percentChange: number;
        kospiData: { time: string; value: number }[];
    }) {
        this.date = data.date;
        this.currentPrice = data.currentPrice;
        this.alldayRatio = data.alldayRatio;
        this.percentChange = data.percentChange;
        this.kospiData = data.kospiData;
    }

    getKospi(): string {
        return `${this.date} - ${this.currentPrice} - ${this.alldayRatio} - ${this.percentChange} - ${JSON.stringify(
            this.kospiData
        )}`;
    }
}

export class Kosdak {
    date: string;
    currentPrice: number;
    alldayRatio: number;
    percentChange: number;
    kosdakData: { time: string; value: number }[];

    constructor(data: {
        date: string;
        currentPrice: number;
        alldayRatio: number;
        percentChange: number;
        kosdakData: { time: string; value: number }[];
    }) {
        this.date = data.date;
        this.currentPrice = data.currentPrice;
        this.alldayRatio = data.alldayRatio;
        this.percentChange = data.percentChange;
        this.kosdakData = data.kosdakData;
    }

    getKospi(): string {
        return `${this.date} - ${this.currentPrice} - ${this.alldayRatio} - ${this.percentChange} - ${JSON.stringify(
            this.kosdakData
        )}`;
    }
}

export class Kospi200 {
    date: string;
    currentPrice: number;
    alldayRatio: number;
    percentChange: number;
    kospi200Data: { time: string; value: number }[];

    constructor(data: {
        date: string;
        currentPrice: number;
        alldayRatio: number;
        percentChange: number;
        kospi200Data: { time: string; value: number }[];
    }) {
        this.date = data.date;
        this.currentPrice = data.currentPrice;
        this.alldayRatio = data.alldayRatio;
        this.percentChange = data.percentChange;
        this.kospi200Data = data.kospi200Data;
    }

    getKospi(): string {
        return `${this.date} - ${this.currentPrice} - ${this.alldayRatio} - ${this.percentChange} - ${JSON.stringify(
            this.kospi200Data
        )}`;
    }
}
