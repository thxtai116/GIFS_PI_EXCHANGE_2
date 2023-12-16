import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from 'primeng/api';
import { ImageGifComponent } from '../image-gif/image-gif.component';
import { ImageLoadingComponent } from '../image-loading/image-loading.component';

@Component({
  selector: 'app-list-gif',
  standalone: true,
  imports: [CommonModule,
    SharedModule,
    ImageLoadingComponent,
    ImageGifComponent,
    InfiniteScrollModule,
    ImageGifComponent],
  templateUrl: './list-gif.component.html',
  styleUrls: ['./list-gif.component.scss']
})
export class ListGifComponent {
  @Input() items!: any[];
  
  @Input() updating!: boolean;

  @Input() countLoadMore:number = 8;

  @Output() favoriteChange = new EventEmitter();

  @Output() viewDetail = new EventEmitter();

  @Output() scrollingFinished = new EventEmitter();
  
  constructor() { 
  }

  ngOnInit(): void {}

  onScrolled(){
    this.scrollingFinished.emit();
  }
}
