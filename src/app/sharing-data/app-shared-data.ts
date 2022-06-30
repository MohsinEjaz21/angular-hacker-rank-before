import { Component } from "@angular/core";

@Component({
  selector: 'app-shared-data',

  template: `
  <h1>
    <a routerLink="/shared-data/childToParent"> ChildToParent </a>
  </h1>
  <h1>
    <a routerLink="/shared-data/childToParentViewChild"> childToParentViewChild </a>
  </h1>
  <h1>
    <a routerLink="/shared-data/parentToChild"> ParentToChild </a>
  </h1>
  <h1>
    <a routerLink="/shared-data/siblings"> Siblings </a>
  </h1>
  
  `
})
export class AppSharedDataComponent {

}
