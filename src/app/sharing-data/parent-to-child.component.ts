import { Component, Input } from '@angular/core';


type IFlower = {
  name: string;
  color: string;
}

@Component({
  selector: 'parent',

  template: `
  <div id="parent"> 
    <child [flowers]="flowers" [addFlower]="addNewFlower" ></child>
  </div>
  `
})
export class ParentToChildOuter {
  flowers: IFlower[];
  constructor() {
    this.flowers = [
      { name: 'Rose', color: 'red' },
      { name: 'Tulip', color: 'yellow' },
      { name: 'Lily', color: 'blue' },
      { name: 'Dahlia', color: 'purple' },
    ]
  }

  addNewFlower(flower = { name: 'Lotus', color: 'pink' }) {
    this.flowers = ([...this.flowers, flower]);
  }
}


@Component({
  selector: 'child',

  template: `
  <div id="child"> 
    <div *ngFor="let flower of flowers">
      <p>{{flower.name + ' '+ flower.color}}</p>
    </div>
    <button (click)="addFlower({ name: 'Lotus', color: 'pink' })">Add New Color</button>
  </div>
  `
})
export class ParentToChildInner {
  @Input() flowers: IFlower[] = [];
  @Input() addFlower = (flower: IFlower) => { };

}

