import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(value: any, filterTable: string) {
        if (!value || !filterTable) {
            return value;
        }

        return value.filter(value => value.name.toLowerCase().indexOf(filterTable.toLowerCase()) !== -1);
    }

}