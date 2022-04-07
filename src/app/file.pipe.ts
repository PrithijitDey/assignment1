import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform{
    transform(c: number, extension: string = '*F') {
        return (((c/5)*9)+32).toFixed(1) + extension;
    }
}
