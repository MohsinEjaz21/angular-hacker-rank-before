import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenAppComponent } from './app-template-driven';
import { TemplateDrivenFormComponent } from './template-driven-forms.component';


const routes: Routes = [
  { path: '', component: TemplateDrivenAppComponent },
  { path: 'forms', component: TemplateDrivenFormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenRoutingModule { }
