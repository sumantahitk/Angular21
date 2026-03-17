import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports:[],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
 
  // value=10;

  // value="Sumanta"

  name:string|number ="Bappa";

  age:number=18

  value:any =30

  // value ="hello"

  roll:unknown = 34

  // name:string =10

  handle(){
    let value;
    value=10;
    value="sumanta"

    console.log(value);
  }

  sum(a:number,b:number){
    return a+b;
  }
  
}
