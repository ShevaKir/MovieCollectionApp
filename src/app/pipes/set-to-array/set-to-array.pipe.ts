import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setToArray',
  standalone: true
})
export class SetToArrayPipe implements PipeTransform {

  transform(value: Set<number>): number[] {
    return Array.from(value);
  }

}
