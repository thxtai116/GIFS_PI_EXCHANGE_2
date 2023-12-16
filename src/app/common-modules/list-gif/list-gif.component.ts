import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from 'primeng/api';
import { ImageGifComponent } from '../image-gif/image-gif.component';
import { ImageLoadingComponent } from '../image-loading/image-loading.component';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GifDetailComponent } from '../gif-detail/gif-detail.component';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-list-gif',
  standalone: true,
  imports: [CommonModule,
    SharedModule,
    ImageLoadingComponent,
    ImageGifComponent,
    InfiniteScrollModule,
    ImageGifComponent,
    DynamicDialogModule,
    TooltipModule
  ],
  providers: [DialogService],
  templateUrl: './list-gif.component.html',
  styleUrls: ['./list-gif.component.scss']
})
export class ListGifComponent {
  @Input() items!: any[];

  @Input() updating!: boolean;

  @Input() countLoadMore: number = 8;

  @Output() favoriteChange = new EventEmitter();

  @Output() viewDetail = new EventEmitter();

  @Output() scrollEvent = new EventEmitter();
  private ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {
  }

  ngOnInit(): void {
  }

  onScrolled() {
    this.scrollEvent.emit();
  }

  showDetail(data: any) {
    this.ref = this.dialogService.open(GifDetailComponent, {
      data: data,
      appendTo: 'body',
      dismissableMask: true,
      maskStyleClass: 'gif-detail',
    });
  }
}
