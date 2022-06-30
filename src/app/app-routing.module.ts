import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'app-component', pathMatch: 'full' },
  { path: 'template-driven', loadChildren: () => import('./template-driven/template-driven.module').then(x => x.TemplateDriveModule) },
  { path: 'shared-data', loadChildren: () => import('./sharing-data/sharing-data.module').then(x => x.SharingDataModule) },
  // { path: '', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
