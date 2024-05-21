export class MyPageCheckDTO {
    private birthDate: string;

    constructor(birthDate: string) {
        this.birthDate = birthDate;
    }

    setBirthDate(birthDate: string) {
        this.birthDate = birthDate;
    }

    getBirthDate(): string {
        return this.birthDate;
    }
}
