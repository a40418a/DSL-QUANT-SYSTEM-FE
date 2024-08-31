//결과화면
export class ResultDTO {

    //결과정보
    finalCash: number;
    finalAsset: number;
    finalBalance: number;
    profit: number;
    profitRate: number;
    numberOfTrades: number;


    constructor(data: {
        //결과정보
        finalCash: number;
        finalAsset: number;
        finalBalance: number;
        profit: number;
        profitRate: number;
        numberOfTrades: number;
        fileHtml: string;
    }) {
        this.finalCash=data.finalCash;
        this.finalAsset=data.finalAsset;
        this.finalBalance=data.finalBalance;
        this.profit=data.profit;
        this.profitRate=data.profitRate;
        this.numberOfTrades=data.numberOfTrades;
    }

}
