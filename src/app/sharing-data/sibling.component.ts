import { Component, Injectable, Injector, OnInit } from '@angular/core';

type IFlower = {
  name: string;
  color: string;
}

@Component({
  selector: 'sibling1',
  template: `
  <div id="child"> 
  <div *ngFor="let flower of sharedService.flowers">
    <p>{{flower.name + ' '+ flower.color}}</p>
  </div>
  </div>
  `
})
export class SiblingComp1 implements OnInit {
  sharedService: SharedService
  constructor(private injector: Injector) {
    this.sharedService = injector.get(SharedService)
  }
  ngOnInit() {

  }
}

@Component({
  selector: 'sibling2',
  template: `
  <div id="parent3"> 
    <sibling1></sibling1>
    <button (click)="addFlower()">Add New Color</button>
  </div>
  `
})
export class SiblingComp2 {
  sharedService: SharedService
  constructor(private injector: Injector) {
    this.sharedService = injector.get(SharedService)
  }

  addFlower() {
    this.sharedService.addFlower({ name: 'Lotus', color: 'pink' })
  }

}



// SHARED SERVICE
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  flowers = [
    { name: 'Rose', color: 'red' },
    { name: 'Tulip', color: 'yellow' },
    { name: 'Lily', color: 'blue' },
    { name: 'Dahlia', color: 'purple' },
  ]

  addFlower(flower: IFlower) {
    console.log("addFlowers")
    this.flowers = [...this.flowers, flower]
  }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/