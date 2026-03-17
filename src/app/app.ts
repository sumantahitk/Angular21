import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports:[],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  name: string = "";
  key: string = "";

  handleClick() {
    console.log("Button clicked");
  }

  typing(event: any) {
    this.name = event.target.value;
  }

  onKeyUp(event: any) {
    this.key = event.key;
  }

  onHover() {
    console.log("Mouse entered");
  }

  onLeave() {
    console.log("Mouse left");
  }

  onBlur() {
  console.log("Input lost focus");
}

}
