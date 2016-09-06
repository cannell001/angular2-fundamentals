import {Component} from 'angular2/core';

@Component({
  selector: 'my-component',
  template: `
    <h1>Hello {{name}}</h1>
    <img [src] = "imageUrl"  />
    <br />
    <button (click) = "changeMessage()">Button</button>
    <h1>{{clickMessage}}</h1>
  `
})

export class MyComponent {
  name
  imageUrl;
  isActive;
  clickMessage;
  constructor(){
    this.name = 'John Doe';
    this.imageUrl = 'images/Kodkod2.jpg';
    this.isActive = true;
  }

  changeMessage(){
    this.clickMessage = "Hello World";
  }
}
