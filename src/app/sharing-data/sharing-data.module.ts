import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppSharedDataComponent } from './app-shared-data';
import { ChildToParentViewChildInner, ChildToParentViewChildOuter } from './child-to-parent-viewchild.component';
import { ChildToParentInner, ChildToParentOuter } from './child-to-parent.component';
import { ParentToChildInner, ParentToChildOuter } from './parent-to-child.component';
import { AppSharedDataRoutingModule } from './shared-data.routing';

@NgModule({
  declarations: [
    ChildToParentOuter,
    ChildToParentInner,
    ParentToChildOuter,
    ParentToChildInner,
    ChildToParentViewChildOuter,
    ChildToParentViewChildInner,
    AppSharedDataComponent
  ],
  imports: [
    CommonModule,
    AppSharedDataRoutingModule
  ]
})
export class SharingDataModule { }
