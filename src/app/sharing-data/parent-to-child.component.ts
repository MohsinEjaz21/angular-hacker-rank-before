import { Component, Input, OnInit } from '@angular/core';


type IFlower = {
  name: string;
  color: string;
}

@Component({
  selector: 'parent',

  template: `
  <div id="parent"> 
    <child [parent]="this"  ></child>
  </div>
  `
})
export class ParentToChildOuter {
  flowerNameTemp = 'Lili';
  flowers: IFlower[];

  constructor() {
    this.flowers = [
      { name: 'Rose', color: 'red' },
      { name: 'Tulip', color: 'yellow' },
      { name: 'Lily', color: 'blue' },
      { name: 'Dahlia', color: 'purple' },
    ]
    this.flowerNameTemp = 'Lili';
  }

  addFlower(flower: IFlower) {
    console.log("flowerName ", this.flowerNameTemp)
    this.flowers = ([...this.flowers, flower]);
  }
}

@Component({
  selector: 'child',

  template: `
  <div id="child"> 
    <div *ngFor="let flower of parent.flowers">
      <p>{{flower.name + ' '+ flower.color}}</p>
    </div>
    <button (click)="parent.addFlower({ name: 'Lotus', color: 'pink' })">Add New Color</button>
  </div>
  `
})
export class ParentToChildInner implements OnInit {
  @Input() parent: ParentToChildOuter = new ParentToChildOuter();;

  ngOnInit() {
    console.log("parent ", this.parent)
  }
}

