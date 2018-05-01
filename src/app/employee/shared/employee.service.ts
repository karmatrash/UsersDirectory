import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Employee } from './models/employee.model';
import { IFullEmployeeInfo } from './interfaces/employee.interface';

@Injectable()
export class EmployeeService {
    /**
     * Angular FireStore async subscription variables to EmployeeCollection
     */
    public employeesCol: AngularFirestoreCollection<Employee>;
    private employeesObservableFireStoreArray: Observable<Employee[]>;

    /**
     * ObservableDataService data store among the application
     * @type {BehaviorSubject<Array<Employee>>}
     */
    private _employees: BehaviorSubject<Array<Employee>> = new BehaviorSubject<Array<Employee>>([]);

    get employees(): Observable<Array<Employee>> {
        return this._employees.asObservable();
    }

    /**
     * All the awful stuff with Observable User[] is made to get the UID from after last FireStore update
     * April 3, 2018 - $key variable become deprecated
     * @param {AngularFirestore} afs
     */
    constructor(private afs: AngularFirestore,
                private router: Router) {
        this.employeesCol = this.afs.collection('employees');
        this.employeesObservableFireStoreArray = this.employeesCol.snapshotChanges()
            .map(changes => {
                return changes.map(a => {
                    const data = a.payload.doc.data() as Employee;
                    data.key = a.payload.doc.id;
                    return data;
                });
            });

        // Observable Data Service BHS approach for storing async changing data
        this.employeesObservableFireStoreArray.subscribe(employees => {
            this._employees.next(employees.map(employee => new Employee(employee)));
        });
    }

    /**
     * Updating collection document by $key with new EmployeeDTO Data
     * @param {string} key
     * @param {IFullEmployeeInfo} employee
     */
    public updateUser(key: string, employee: IFullEmployeeInfo) {
        this.employeesCol.doc(key).update(employee)
            .then(() => {
                console.log('Employee has been successfully updated');
            });
    }

    /**
     * Request for getting user from collection, returning the Observable, might turn it into JSON obj in subscriber
     * @param {string} key
     * @returns {Observable<Employee>}
     */
    public getEmployeeByUID(key: string): Observable<Employee> {
        const currentUserDoc: AngularFirestoreDocument<Employee> = this.employeesCol.doc(key);
        return currentUserDoc.valueChanges();
    }

    public createEmployee(employee: IFullEmployeeInfo) {
        this.employeesCol.add(employee as Employee)
            .then(() => {
                console.log('Employee has been successfully created');
                this.router.navigate(['employees']);
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
