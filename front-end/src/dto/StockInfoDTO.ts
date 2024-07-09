export class Top20 {
    private rank: string;
    private stock: string;
    private presnetPrice: string;
    private alldayRatio: number;
    private percentChange: number;

    constructor(rank: string, stock: string, presnetPrice: string, alldayRatio: number, percentChange: number) {
        this.rank = rank;
        this.stock = stock;
        this.presnetPrice = presnetPrice;
        this.alldayRatio = alldayRatio;
        this.percentChange = percentChange;
    }

    getTop20(): string {
        return `${this.rank} - ${this.stock} - ${this.presnetPrice} - ${this.alldayRatio} - ${this.percentChange}`;
    }
}

export class Kospi {
    private date: string;
    private currentPrice: number;
    private alldayRatio: number;
    private percentChange: number;
    private kospiData: { time: string; value: number }[];

    constructor(
        date: string,
        currentPrice: number,
        alldayRatio: number,
        percentChange: number,
        kospiData: { time: string; value: number }[]
    ) {
        this.date = date;
        this.currentPrice = currentPrice;
        this.alldayRatio = alldayRatio;
        this.percentChange = percentChange;
        this.kospiData = kospiData;
    }

    getKospi(): string {
        return `${this.date} - ${this.currentPrice} - ${this.alldayRatio} - ${this.percentChange} - ${JSON.stringify(
            this.kospiData
        )}`;
    }
}

export class Kosdak {
    private date: string;
    private currentPrice: number;
    private alldayRatio: number;
    private percentChange: number;
    private kosdakData: { time: string; value: number }[];

    constructor(
        date: string,
        currentPrice: number,
        alldayRatio: number,
        percentChange: number,
        kosdakData: { time: string; value: number }[]
    ) {
        this.date = date;
        this.currentPrice = currentPrice;
        this.alldayRatio = alldayRatio;
        this.percentChange = percentChange;
        this.kosdakData = kosdakData;
    }

    getKosdak(): string {
        return `${this.date} - ${this.currentPrice} - ${this.alldayRatio} - ${this.percentChange} - ${JSON.stringify(
            this.kosdakData
        )}`;
    }
}

export class Kospi200 {
    private date: string;
    private currentPrice: number;
    private alldayRatio: number;
    private percentChange: number;
    private kospi200Data: { time: string; value: number }[];

    constructor(
        date: string,
        currentPrice: number,
        alldayRatio: number,
        percentChange: number,
        kospi200Data: { time: string; value: number }[]
    ) {
        this.date = date;
        this.currentPrice = currentPrice;
        this.alldayRatio = alldayRatio;
        this.percentChange = percentChange;
        this.kospi200Data = kospi200Data;
    }

    getKospi(): string {
        return `${this.date} - ${this.currentPrice} - ${this.alldayRatio} - ${this.percentChange} - ${JSON.stringify(
            this.kospi200Data
        )}`;
    }
}
