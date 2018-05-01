export class Role {
    key: string;
    title: string;
    description: string;

    constructor(obj) {
        this.title = obj.title;
        this.description = obj.description;
    }
}
