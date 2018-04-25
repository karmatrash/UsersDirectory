export class User {
    id: number;
    email: string;
    gender: string;
    phone: string;
    first_name: string;
    last_name: string;

    constructor(obj: IFullUserInfo) {
        if (obj.id) {
            this.id = obj.id;
        }
        if (obj.email) {
            this.email = obj.email;
        }
        if (obj.gender) {
            this.gender = obj.gender;
        }
        if (obj.phone && obj.phone.length > 0) {
            this.phone = obj.phone;
        } else {
            this.phone = '';
        }
        if (obj.first_name) {
            this.first_name = obj.first_name;
        }
        if (obj.last_name) {
            this.last_name = obj.last_name;
        }
    }

    private get fullName(): string {
        return [this.first_name, this.last_name].join(' ');
    }
}

interface IFullUserInfo {
    id: number;
    email: string;
    gender: string;
    phone: string;
    first_name: string;
    last_name: string;
}
