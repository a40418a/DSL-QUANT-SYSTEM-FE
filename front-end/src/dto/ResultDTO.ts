export class ResultDTO {
    fileHtml: string; // HTML 형식의 표시화면 데이터

    constructor(fileHtml: string) {
        this.fileHtml = fileHtml;
    }
    setfileHtml(fileHtml: string) {
        this.fileHtml = fileHtml;
    }
    getfileHtml(): string {
        return this.fileHtml;
    }
}
