import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

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
  </div>
  `
})
export class ChildToParentViewChildInner {
  @Input() flowers: IFlower[] = [];
  tempFlower: IFlower = { name: 'Dahlia55', color: 'purple55' };

  addFlower($flower: IFlower) {
    console.log("childToParent", this.tempFlower)
    console.log("flowerName ", $flower)
    this.flowers = ([...this.flowers, $flower]);
  }
}

@Component({
  selector: 'parent3',
  template: `
  <div id="parent"> 
    <child3 [flowers]="flowers"></child3>
    <button (click)="handleAddFlowers()">Add New Color</button>
  </div>
  `
})
export class ChildToParentViewChildOuter implements AfterViewInit {
  @ViewChild(ChildToParentViewChildInner, { static: false }) childComponent!: ChildToParentViewChildInner;

  flowers: IFlower[];
  ngAfterViewInit() {
    console.log("childComponent ", this.childComponent)

  }

  handleAddFlowers() {
    console.log("handleAddFlowers")
    this.childComponent.addFlower(this.childComponent.tempFlower);
  }

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