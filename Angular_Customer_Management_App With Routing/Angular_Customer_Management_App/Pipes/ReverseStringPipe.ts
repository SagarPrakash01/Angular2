import { Pipe, PipeTransform } from "@angular/core";


@Pipe({ name: 'reversestring' })
export class ReverseStringPipe {
    //transform(value: string): string {
    //    return value.split('').reverse().join("");
    //}

    transform(value: string, start: string, end: string): string {
        return start + " " + value.split('').reverse().join("") + " " + end;
    }

}
