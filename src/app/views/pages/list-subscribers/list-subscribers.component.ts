import { Component } from '@angular/core';
import { ListSubsService } from 'src/app/services/listSubs/list-subs.service';

@Component({
  selector: 'app-list-subscribers',
  templateUrl: './list-subscribers.component.html',
  styleUrls: ['./list-subscribers.component.scss']
})
export class ListSubscribersComponent {

  searchCriteria = 'Usuario';
  pageNum = 1;
  pageCount = 10;
  sortOrder = 'PublicId';
  sortType = 1;

  data: any;

  constructor(private listSubsService: ListSubsService) {

  }

  ngOnInit() {
    // this.listSubsService.getSubs().subscribe(data => {
    //   console.log(data)
    // })
    this.onSettingsChange();
  }

  onSettingsChange() {
    let query = `criteria=${ this.searchCriteria }&page=${ this.pageNum }&count=${ this.pageCount }&sortOrder=${ this.sortOrder }&sortType=${ this.sortType }`;

    this.listSubsService.getSubs(query).subscribe(data => {
      // console.log(data)
      this.data = data.Data;
      console.log(this.data)
    });
  }

  deleteUser(id: any, name: string) {
    let ans = confirm(`Deseas eliminar a '${ name }'?`);
    if(ans) {
      this.listSubsService.deleteSub(id).subscribe(data => {
        alert(data.message)
        this.onSettingsChange();
      })
    }
    
  }
  
  increasePage() {
    this.pageNum ++;
    this.onSettingsChange()
  }

  decreasePage() {
    if(this.pageNum > 1)
      this.pageNum --;
    this.onSettingsChange()
  }

}
