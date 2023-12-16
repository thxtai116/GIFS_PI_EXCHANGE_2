import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    InputTextModule,
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule
  ]
})
export class HomeModule { }
