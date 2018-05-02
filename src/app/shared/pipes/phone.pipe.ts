import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phone'
})
export class PhonePipe implements PipeTransform {

    /**
     * We use this pipe to transform '17:07 01.05.2018' in 'May 1, 2018 11:11 PM' | TableCellComponent
     * @param {string} value
     * @returns {string}
     */
    transform(value: string): string {
        let cut;

        // Switches for different length phone values, when '10' value doesn't not consist unicode & '12 does
         switch (value.length) {
            case 10:
                cut = value.match(/(\d{3})(\d{3})(\d{2})(\d{2})/);
                return `+38 (${cut[1]}) ${cut[2]}-${cut[3]}-${cut[4]}`;
            case 12:
                cut = value.match(/(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/);
                return `+${cut[1]} (${cut[2]}) ${cut[3]}-${cut[4]}-${cut[5]}`;
            default:
                return value;
        }
    }
}
