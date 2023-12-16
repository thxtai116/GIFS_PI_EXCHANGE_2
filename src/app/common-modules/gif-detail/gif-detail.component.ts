import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-gif-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gif-detail.component.html',
  styleUrls: ['./gif-detail.component.scss']
})
export class GifDetailComponent {
  public data :any = {};
  constructor(private config:DynamicDialogConfig){

  }

  ngOnInit(){
    this.data = this.config.data;
  }
  toProfile(url: any) {
    window.open(url, '_blank')
  }
}
