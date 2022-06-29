import { Component } from '@angular/core';

@Component({
  selector: 'parent1',
  template: `
  <div id="parent"> 
    <child1></child1>
  </div>
  `
})
export class ChildToParentOuter {

}


@Component({
  selector: 'child1',
  template: `
  <div id="child"> 
  <h1>I am child to parent</h1>
  </div>
  `
})
export class ChildToParentInner {

}

