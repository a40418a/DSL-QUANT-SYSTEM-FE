export class UserInfoDTO {
    private userName: string;
    private userPhone: string;
    private userBirthday: string;
    private userGender: string;
    private backtestRecords: any[];

    constructor(userName: string, userPhone: string, userBirthday: string, userGender: string, backtestRecords: any[]) {
        this.userName = userName;
        this.userPhone = userPhone;
        this.userBirthday = userBirthday;
        this.userGender = userGender;
        this.backtestRecords = backtestRecords;
    }

    getMyPageInfo(): string {
        return `${this.userName} - ${this.userPhone} - ${this.userBirthday} - ${this.userGender} - ${this.backtestRecords}`;
    }
}
