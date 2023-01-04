import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toK'
})
export class ToKPipe implements PipeTransform {

  transform(count: number, ...args: unknown[]): unknown {
    let unit = ""
    let num = ""
    if(count>1000){
      unit = "k"
      num = (count/1000).toFixed(0)
    }
    if(count>1000000){
      unit = "m"
      num = (count/1000000).toFixed(2)
    }
    if(count>1000000000){
      unit = "g"
      num = (count/1000000000).toFixed(2)
    }
    return num + unit
  }

}
