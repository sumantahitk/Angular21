import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports:[],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
name:string="";
city:string="";
email:string="";

handleInput(val:string){
  this.name=val;
}

getEmail(val:string){
  this.email=val;
}

}
