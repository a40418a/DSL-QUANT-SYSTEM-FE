//login, mypagecheck, mypage

export class UserInfoDTO {
    userName: string;
    userPhone: number;
    userBirthday: number;
    userGender: string;
    backtestRecords: any[];

    constructor(data: {
        userName: string;
        userPhone: number;
        userBirthday: number;
        userGender: string;
        backtestRecords: any[];
    }) {
        this.userName = data.userName;
        this.userPhone = data.userPhone;
        this.userBirthday = data.userBirthday;
        this.userGender = data.userGender;
        this.backtestRecords = data.backtestRecords;
    }

    getUserInfo(): string {
        return `${this.userName} - ${this.userPhone} - ${this.userBirthday} - ${this.userGender} - ${JSON.stringify(
            this.backtestRecords
        )}`;
    }
}
