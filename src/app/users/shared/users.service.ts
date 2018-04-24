import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

interface IUser {
    name: string;
}

@Injectable()
export class UsersService {
    usersCol: AngularFirestoreCollection<IUser>;
    users: Observable<IUser[]>;

    constructor(private afs: AngularFirestore) {
        this.usersCol = this.afs.collection('users');
        this.users = this.usersCol.valueChanges();
    }

    getUsers() {
        return this.users;
    }
}
