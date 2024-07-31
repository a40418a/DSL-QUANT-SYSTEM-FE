export class ResultDTO {
    fileHtml: string;

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
