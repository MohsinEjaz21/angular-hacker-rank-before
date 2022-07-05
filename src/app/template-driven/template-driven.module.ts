import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenAppComponent } from './app-template-driven';
import { TemplateDrivenFormComponent } from './template-driven-forms.component';
import { TemplateDrivenRoutingModule } from './template-driven.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TemplateDrivenRoutingModule
  ],
  exports: [],
  declarations: [TemplateDrivenAppComponent, TemplateDrivenFormComponent],
  providers: [],
})
export class TemplateDriveModule { }
