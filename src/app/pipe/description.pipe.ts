import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string, star: number, end : number): any{
    return value.substring(star, end) + '...';
  }

}
