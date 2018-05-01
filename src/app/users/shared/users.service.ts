import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

import { IFullUserInfo } from './interfaces/user.interface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { User } from './models/users.model';
import { Router } from '@angular/router';

@Injectable()
export class UsersService {
    /**
     * Angular FireStore async subscription variables to UsersCollection
     */
    public usersCol: AngularFirestoreCollection<User>;
    private usersObservableFireStoreArray: Observable<User[]>;

    /**
     * ObservableDataService data store among the application
     * @type {BehaviorSubject<Array<User>>}
     */
    private _users: BehaviorSubject<Array<User>> = new BehaviorSubject<Array<User>>([]);

    get users(): Observable<Array<User>> {
        return this._users.asObservable();
    }

    /**
     * All the awful stuff with Observable User[] is made to get the UID from after last FireStore update
     * April 3, 2018 - $key variable become deprecated
     * @param {AngularFirestore} afs
     */
    constructor(private afs: AngularFirestore,
                private router: Router) {
        this.usersCol = this.afs.collection('users');
        this.usersObservableFireStoreArray = this.usersCol.snapshotChanges()
            .map(changes => {
                return changes.map(a => {
                    const data = a.payload.doc.data() as User;
                    data.key = a.payload.doc.id;
                    return data;
                });
            });

        // Observable Data Service BHS approach for storing async changing data
        this.usersObservableFireStoreArray.subscribe(users => {
            console.log(users);
            this._users.next(users.map(user => new User(user)));
        });
    }

    /**
     * Updating collection document by $key with new UserDTO Data
     * @param {string} key
     * @param {IFullUserInfo} user
     */
    public updateUser(key: string, user: IFullUserInfo) {
        this.usersCol.doc(key).update(user)
            .then(() => {
                console.log('User has been successfully updated');
            });
    }

    /**
     * Request for getting user from collection, returning the Observable, might turn it into JSON obj in subscriber
     * @param {string} key
     * @returns {Observable<User>}
     */
    public getUserByUID(key: string): Observable<User> {
        const currentUserDoc: AngularFirestoreDocument<User> = this.usersCol.doc(key);
        return currentUserDoc.valueChanges();
    }

    public createUser(user: IFullUserInfo) {
        this.usersCol.add(user as User)
            .then(() => {
                console.log('User has been successfully created');
                this.router.navigate(['users']);
            });
    }

    // public deleteUser(key: string) {
    //     this.usersCol.doc(key).delete()
    //         .then(() => {
    //             console.log('User has been successfully created');
    //             this.router.navigate(['users']);
    //         });
    // }
}
