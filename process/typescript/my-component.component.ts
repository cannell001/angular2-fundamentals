import {Component} from 'angular2/core';

@Component({
  selector: 'my-component',
  template: `
    <h1>Hello {{name}}</h1> 
  `
})

export class MyComponent {
  name;
  constructor(){
    this.name = 'John Doe';
  }
}
