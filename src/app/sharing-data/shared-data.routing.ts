import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSharedDataComponent } from './app-shared-data';
import { ChildToParentViewChildOuter } from './child-to-parent-viewchild.component';
import { ChildToParentOuter } from './child-to-parent.component';
import { ParentToChildOuter } from './parent-to-child.component';

const routes: Routes = [
  { path: 'parentToChild', component: ParentToChildOuter },
  { path: 'childToParent', component: ChildToParentOuter },
  { path: 'childToParentViewChild', component: ChildToParentViewChildOuter },
  { path: 'shared-data', component: AppSharedDataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSharedDataRoutingModule { }
