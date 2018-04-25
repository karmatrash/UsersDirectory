import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { User } from './users.model';

@Injectable()
export class UsersService {
    /**
     * Angular FireStore async subscription variables to UsersCollection
     */
    private usersCol: AngularFirestoreCollection<User>;
    private usersObservableFireStoreArray: Observable<User[]>;

    /**
     * ObservableDataService data store among the application
     * @type {BehaviorSubject<Array<User>>}
     */
    private _users: BehaviorSubject<Array<User>> = new BehaviorSubject<Array<User>>([]);

    get users(): Observable<Array<User>> {
        return this._users.asObservable();
    }

    constructor(private afs: AngularFirestore) {
        this.usersCol = this.afs.collection('users');
        this.usersObservableFireStoreArray = this.usersCol.valueChanges();

        this.usersObservableFireStoreArray.subscribe(users => {
            this._users.next(users.map(user => new User(user)));
            console.log(this._users.getValue());
        });
    }
}
