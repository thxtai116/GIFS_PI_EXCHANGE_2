import { Component } from '@angular/core';
import { GifServiceService } from 'src/app/common-modules/services/gif-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public keySearch = '';
  private pagination: any = {
    count: null,
    offset: null,
    total_count: null
  };
  public items:any =[];
  constructor(private gifServiceService: GifServiceService) {
  }

  public searchData(){
  }
  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.gifServiceService.getTrending$({ limit: this.pagination.count, offset: this.pagination.offset }).subscribe(data => {
      console.log("gifServiceService", data);
      this.items = data.data;
    })
  }


  onScrolling() {
    //this.__gifFacade.search({ offset: this.pagination.count + this.pagination.offset, limit: LIMIT, q: this.searchControl.value }, false, this.reloadTags).subscribe({})
  }
}
