import { IFullEmployeeInfo } from '../interfaces/employee.interface';

export class Employee {
    key: string;
    email: string;
    gender: string;
    phone: string;
    first_name: string;
    last_name: string;
    created: string;
    updated: string;
    status: 'active' | 'disabled';

    constructor(obj: IFullEmployeeInfo) {
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
        if (obj.created) {
            this.created = obj.created;
        }
        if (obj.updated) {
            this.updated = obj.updated;
        }
        if (obj.key) {
            this.key = obj.key;
        }
        if (obj.status) {
            this.status = obj.status;
        }
    }

    get fullName(): string {
        return [this.first_name, this.last_name].join(' ');
    }
}
