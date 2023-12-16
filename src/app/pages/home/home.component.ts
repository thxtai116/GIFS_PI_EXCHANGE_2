import { Component } from '@angular/core';
import { GifServiceService, HTTPParams } from 'src/app/common-modules/services/gif-service.service';

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
  public trendingKeyword!: string[]
  public items:any =[];
  public loading = false;
  private LIMIT = 20;
  constructor(private gifServiceService: GifServiceService) {
  }

  public searchData(){
    let search = this.keySearch;
    search = search.trim();
    if(search){
      this.selectTag(search);
    }else{
      this.loadData();
    }
  }
  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.loading = true;
    this.gifServiceService.getTrending$({ limit: this.LIMIT, offset: this.LIMIT }).subscribe(data => {
      this.items = data.data;
      this.pagination = data.pagination;
      this.loading = false;
    })

    this.gifServiceService.getTrendingKeyword().subscribe(data => {
      this.trendingKeyword = data.data;
    })
  }

  public selectTag(event:any){
    this.gifServiceService.getTags(event).subscribe(data=>{
      const arrTag = data.data;
      if(arrTag && arrTag.length >0){
        this.trendingKeyword = arrTag.map((x:any)=>x.name);
      }else{
        this.trendingKeyword = [];
      }
    })
    let params = {
      q: event.trim(),
      limit: this.LIMIT,
      offset: this.pagination.offset,
    };
    this.loading = true;
    this.gifServiceService.searchByTrendingKeyword$(params).subscribe(data=>{
      this.pagination = data.pagination;
      this.items = data.data;
      this.loading = false;
    })
  }

  private resultSearch(){

  }


  onScrolling() {
    //this.__gifFacade.search({ offset: this.pagination.count + this.pagination.offset, limit: LIMIT, q: this.searchControl.value }, false, this.reloadTags).subscribe({})
    let params = {
      q: this.keySearch.trim(),
      limit: this.LIMIT,
      offset: this.pagination.count + this.pagination.offset,
    };
    this.loading = true;
    if(this.keySearch.trim()){
      this.gifServiceService.searchByTrendingKeyword$(params).subscribe(data=>{
        this.items = this.items.concat(data.data);
        this.pagination = data.pagination;
        this.loading = false;
      })
    }else{
      this.gifServiceService.getTrending$({ limit: this.pagination.count, offset: this.pagination.offset }).subscribe(data => {
        console.log("gifServiceService", data);
        this.items = this.items.concat(data.data);
        this.pagination = data.pagination;
        this.loading = false;
      })
    }
 
  }
}
