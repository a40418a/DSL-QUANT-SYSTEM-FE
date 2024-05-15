class MyPageCheckDTO {
    constructor(birthDate) {
        this.birthDate = birthDate;
    }

    setBirthDate(birthDate) {
        this.birthDate = birthDate;
    }
    getBirthDate() {
        return this.birthDate;
    }
}

export { MyPageCheckDTO };
