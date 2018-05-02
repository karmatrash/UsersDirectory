import { Role } from '../../../roles/role.model';

export interface IFullEmployeeInfo {
    key: string;
    email: string;
    gender: string;
    phone: string;
    first_name: string;
    last_name: string;
    created: string;
    status: 'active' | 'disabled';
    updated?: string;
    roles?: Array<Object | Role>;
}
