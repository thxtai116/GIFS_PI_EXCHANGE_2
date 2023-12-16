import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-suggest',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule
    ],
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss']
})
export class SuggestComponent {

  @Input() keywords!: string[];

  @Input() selectable: boolean = false;

  @Input() removable: boolean = false;

  @Input() updating: boolean = false;

  @Output() eventChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }
  public selectItem(event:any){
    this.eventChange.emit(event);
  }

}


