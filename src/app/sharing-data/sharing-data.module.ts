import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppSharedDataComponent } from './app-shared-data';
import { ChildToParentViewChildInner, ChildToParentViewChildOuter } from './child-to-parent-viewchild.component';
import { ChildToParentInner, ChildToParentOuter } from './child-to-parent.component';
import { ParentToChildInner, ParentToChildOuter } from './parent-to-child.component';
import { SharedDataRoutingModule } from './shared-data.routing';
import { SiblingComp1, SiblingComp2 } from './sibling.component';

@NgModule({
  declarations: [
    ChildToParentOuter,
    ChildToParentInner,
    ParentToChildOuter,
    ParentToChildInner,
    ChildToParentViewChildOuter,
    ChildToParentViewChildInner,
    SiblingComp1,
    SiblingComp2,
    AppSharedDataComponent
  ],
  imports: [
    CommonModule,
    SharedDataRoutingModule
  ]
})
export class SharingDataModule { }
