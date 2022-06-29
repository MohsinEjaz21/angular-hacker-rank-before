import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppSharedDataComponent } from './app-shared-data';
import { ChildToParentInner, ChildToParentOuter } from './child-to-parent.component';
import { ParentToChildInner, ParentToChildOuter } from './parent-to-child.component';
import { AppSharedDataRoutingModule } from './shared-data.routing';

@NgModule({
  declarations: [
    ChildToParentOuter,
    ChildToParentInner,
    ParentToChildOuter,
    ParentToChildInner,
    AppSharedDataComponent
  ],
  imports: [
    CommonModule,
    AppSharedDataRoutingModule
  ]
})
export class SharingDataModule { }
