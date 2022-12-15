import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LtravelService } from '../ltravel.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  note:any = {
    title:"",
    author:"",
    content:""
  }
  recommandNoteList:any[] = []

  constructor(private route:ActivatedRoute,public travelServ:LtravelService){
    this.route.queryParams.subscribe(params=>{
      console.log(params)

      // 从HTTP获取note数据
      this.travelServ.getNoteByIdFromHttp((params as any).objectId).subscribe(data=>{
        this.note = (data as any).results[0]
      })
      // 从内存获取note数据
      // this.note = this.travelServ.getNoteById((params as any).objectId)
    })

    this.travelServ.getNoteListFromHttp().subscribe(data=>{
      this.recommandNoteList = (data as any).results
    })
  }

}
