import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-loading.component.html',
  styleUrls: ['./image-loading.component.scss']
})
export class ImageLoadingComponent {
  @Input() countLoading: number = 10;

  itemsLoading: any[] = new Array(this.countLoading)

  ngOnChanges(changes: SimpleChanges) {
      this.itemsLoading = new Array(this.countLoading)
  }
}
