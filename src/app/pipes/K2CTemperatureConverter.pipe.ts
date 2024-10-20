import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'K2CTemperatureConverter'
})
export class K2CTemperatureConverterPipe implements PipeTransform {

  transform(value?: number): string {
    return value !== undefined && value !== null ? (value - 273).toFixed(2) : '0.00';
  }

}
