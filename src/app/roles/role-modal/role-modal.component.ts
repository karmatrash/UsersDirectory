import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
    selector: 'app-role-modal',
    templateUrl: './role-modal.component.html',
    styleUrls: ['./role-modal.component.scss']
})
export class RoleModalComponent implements OnInit {

    title: string;
    closeBtnName: string;
    list: any[] = [];

    constructor(public bsModalRef: BsModalRef) {}

    ngOnInit() {
        this.list.push('PROFIT!!!');
    }
}
