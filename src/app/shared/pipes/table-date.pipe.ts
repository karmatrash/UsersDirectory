import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'tableDate'
})
export class TableDatePipe implements PipeTransform {

    /**
     * We use this pipe to transform '17:07 01.05.2018' in 'May 1, 2018 11:11 PM' | TableCellComponent
     * @param {string} value
     * @returns {any}
     */
    transform(value: string): any {
        return moment(new Date(value).toISOString()).format('lll');
    }
}
