import {Component} from 'angular2/core';

@Component({
  selector: 'my-component',
  template: `
    <h1>Hello {{name}}</h1>
    <img bind-src = "imageUrl"  />
  `
})

export class MyComponent {
  name
  imageUrl;
  constructor(){
    this.name = 'John Doe';
    this.imageUrl = 'http://lorempixel.com/400/200';
  }
}
