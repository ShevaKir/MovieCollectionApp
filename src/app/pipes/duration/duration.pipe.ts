import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  MINUTES: number = 60; 
  transform(value: number, ...args: unknown[]): string {
    const hours = Math.floor(value / this.MINUTES);
    const remainingMinutes = value % this.MINUTES;

    return `${hours}h ${remainingMinutes}m`;
  }
         
}
