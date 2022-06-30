import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { TemplateDrivenComponent } from './app-template-driven';
import { TemplateDrivenRoutingModule } from './template-driven.routing';


@NgModule({
  imports: [CommonModule, TemplateDrivenRoutingModule],
  exports: [],
  declarations: [TemplateDrivenComponent],
  providers: [],
})
export class TemplateDriveModule { }
