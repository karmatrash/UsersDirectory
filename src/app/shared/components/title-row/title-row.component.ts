import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-title-row',
    templateUrl: './title-row.component.html',
    styleUrls: ['./title-row.component.scss']
})
export class TitleRowComponent implements OnInit {

    /**
     * title - shows the main text of row - String
     * actionText - optional text param for event emitting element - String
     * actionClicked - tells parent about click on abstract logic element - EventEmitter
     */
    @Input() title: string;
    @Input() actionText: string;
    @Output() actionClicked = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    onActionClick() {
        this.actionClicked.emit();
    }
}
