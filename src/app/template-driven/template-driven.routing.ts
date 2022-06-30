import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './app-template-driven';


const routes: Routes = [
  { path: '', component: TemplateDrivenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenRoutingModule { }
