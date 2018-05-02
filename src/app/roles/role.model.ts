export class Role {
    key?: string;
    title: string;
    description: string;

    constructor(obj) {
        this.key = obj.key;
        this.title = obj.title;
        this.description = obj.description;
    }
}
