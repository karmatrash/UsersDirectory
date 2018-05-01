import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Role } from './role.model';

@Injectable()
export class RolesService {
    /**
     * Angular FireStore async subscription variables to RolesCollection
     */
    public rolesCol: AngularFirestoreCollection<Role>;
    private rolesObservableFireStoreArray: Observable<Role[]>;

    /**
     * ObservableDataService data store among the application
     * @type {BehaviorSubject<Array<Role>>}
     */
    private _roles: BehaviorSubject<Array<Role>> = new BehaviorSubject<Array<Role>>([]);

    get roles(): Observable<Array<Role>> {
        return this._roles.asObservable();
    }

    /**
     * All the awful stuff with Observable Role[] is made to get the UID from after last FireStore update
     * April 3, 2018 - $key variable become deprecated
     * @param {AngularFirestore} afs
     */
    constructor(private afs: AngularFirestore) {
        this.rolesCol = this.afs.collection('roles');
        this.rolesObservableFireStoreArray = this.rolesCol.snapshotChanges()
            .map(changes => {
                return changes.map(a => {
                    const data = a.payload.doc.data() as Role;
                    data.key = a.payload.doc.id;
                    return data;
                });
            });

        // Observable Data Service BHS approach for storing async changing data
        this.rolesObservableFireStoreArray.subscribe(roles => {
            console.log(roles);
            this._roles.next(roles.map(role => new Role(role)));
        });
    }

    /**
     * Request for getting Role from collection, returning the Observable, might turn it into JSON obj in subscriber
     * @param {string} key
     * @returns {Observable<Role>}
     */
    public getRoleByUID(key: string): Observable<Role> {
        const currentRoleDoc: AngularFirestoreDocument<Role> = this.rolesCol.doc(key);
        return currentRoleDoc.valueChanges();
    }

    public createRole(role: Object) {
        this.rolesCol.add(role as Role)
            .then(() => {
                console.log('Role has been successfully created');
            });
    }
}
