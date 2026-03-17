import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports:[],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  name='Angular Tutorial';
  count=0;
  increment(){
    let abc="abc";
    this.count=this.count+1;
    this.helloworld();
  }
  helloworld(){
    console.log("Hello World")
  }
  
}
