import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Tags'
})
export class TagsPipe implements PipeTransform {

  transform(value: any[], tag : number): any {
    return value.slice(0, tag);
  }
}
