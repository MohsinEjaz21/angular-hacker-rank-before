import { Component, Input, ViewChild } from '@angular/core';

type IFlower = {
  name: string;
  color: string;
}

@Component({
  selector: 'child3',
  template: `
  <div id="child"> 
  <div *ngFor="let flower of flowers">
    <p>{{flower.name + ' '+ flower.color}}</p>
  </div>
  `
})
export class ChildToParentViewChildInner {
  @Input() flowers: IFlower[] = [];
  addFlower($flower: IFlower) {
    console.log("flowerName ", $flower)
    this.flowers = ([...this.flowers, $flower]);
  }
}



@Component({
  selector: 'parent1',
  template: `
  <div id="parent3"> 
    <child1 [flowers]="flowers"></child1>
    <button (click)="childComponent.addFlower({ name: 'Lotus', color: 'pink' })">Add New Color</button>
  </div>
  `
})
export class ChildToParentViewChildOuter {
  @ViewChild(ChildToParentViewChildInner) childComponent!: ChildToParentViewChildInner;

  flowers: IFlower[];

  constructor() {
    this.flowers = [
      { name: 'Rose', color: 'red' },
      { name: 'Tulip', color: 'yellow' },
      { name: 'Lily', color: 'blue' },
      { name: 'Dahlia', color: 'purple' },
    ]
  }

}


/*

// => child:: TS

@Output() yourEmitter = new EventEmitter();
 yourEmitter.emit('your data');

// => parent:: HTML

<child (yourEmitter)="yourParentListnerFn($event)" > </child>

 // => parent:: TS 

yourListnerFn($event){ console.log("event ", $event) }

*/