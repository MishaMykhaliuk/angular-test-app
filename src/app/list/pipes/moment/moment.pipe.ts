import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {
  transform(value: Date| moment.Moment, format: string): string {
    return moment(value).format(format);
  }
}
