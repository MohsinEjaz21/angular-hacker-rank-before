import { Component, EventEmitter, Input, Output } from '@angular/core';

type IFlower = {
  name: string;
  color: string;
}

@Component({
  selector: 'parent1',
  template: `
  <div id="parent"> 
    <child1 [flowers]="flowers" (flowerEmitter)="addFlower($event)" ></child1>
  </div>
  `
})
export class ChildToParentOuter {
  flowers: IFlower[];
  tempfl = "llllll"
  constructor() {
    this.flowers = [
      { name: 'Rose', color: 'red' },
      { name: 'Tulip', color: 'yellow' },
      { name: 'Lily', color: 'blue' },
      { name: 'Dahlia', color: 'purple' },
    ]
  }
  // Oh Add method is in parent called from child using eventEmitter
  addFlower($flower: IFlower) {
    console.log("flowerNameasdasdasasd ", this.tempfl)
    console.log("flowerName ", $flower)
    this.flowers = ([...this.flowers, $flower]);
  }
}


@Component({
  selector: 'child1',
  template: `
  <div id="child"> 
  <div *ngFor="let flower of flowers">
    <p>{{flower.name + ' '+ flower.color}}</p>
  </div>
  <button (click)="flowerEmitter.emit({ name: 'Lotus', color: 'pink' })">Add New Color</button>

  `
})
export class ChildToParentInner {
  // @output / @input remains in child component
  @Output() flowerEmitter = new EventEmitter();
  @Input() flowers: IFlower[] = [];

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