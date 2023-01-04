import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'towan'
})
export class PipeTowanPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(typeof value == "number"){
      let str = String(value);
      if(value>10000){
        str = String(value/10000) + "w"
      }
      return str
    }else{
      return value
    }
  }

}
