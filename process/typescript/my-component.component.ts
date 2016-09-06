import {Component} from 'angular2/core';

@Component({
  selector: 'my-component',
  template: `
    <h1>Hello {{name}}</h1>
    <img [src] = "imageUrl"  />
    <br />
    <button [style.background-color] = "isActive ? 'red':'green'">Button</button>
  `
})

export class MyComponent {
  name
  imageUrl;
  isActive;
  constructor(){
    this.name = 'John Doe';
    this.imageUrl = 'images/Kodkod2.jpg';
    this.isActive = true;
  }
}
