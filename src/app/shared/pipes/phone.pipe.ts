import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phone'
})
export class PhonePipe implements PipeTransform {

    transform(value: string): any {
        let cut;

        switch (value.length) {
            case 10:
                cut = value.match(/(\d{3})(\d{3})(\d{2})(\d{2})/);
                return `+38 (${cut[1]}) ${cut[2]}-${cut[3]}-${cut[4]}`;
            default:
                return value;
        }
    }
}
