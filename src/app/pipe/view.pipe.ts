import { Pipe, PipeTransform } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'View'
})
export class ViewPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) { }
  transform(value: string): any {
    return this._sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
