import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readableDateTime'
})
export class ReadableDateTimePipe implements PipeTransform {

  transform(value: string): unknown {
    const datetime = new Date(+value);
    return datetime.toLocaleDateString("nl-BE");
  }

}
