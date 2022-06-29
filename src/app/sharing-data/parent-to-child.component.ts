import { Component, Input, OnInit } from '@angular/core';


type IFlower = {
  name: string;
  color: string;
}

@Component({
  selector: 'parent2',

  template: `
  <div id="parent"> 
  <div *ngFor="let flower of flowers">
      <p>{{flower.name + ' '+ flower.color}}</p>
    </div>
    <child2 [parent]="this"  ></child2>
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
    console.log("aaaaaa")

    console.log("flowerName ", this.flowerNameTemp)
    this.flowers = ([...this.flowers, flower]);
  }
}

@Component({
  selector: 'child2',

  template: `
  <div id="child"> 
    <button (click)="parent.addFlower({ name: 'Lotus', color: 'pink' })">Add New Color</button>
  </div>
  `
})
export class ParentToChildInner implements OnInit {
  @Input() parent!: ParentToChildOuter;

  ngOnInit() {
    console.log("parent ", this.parent)
  }
}

