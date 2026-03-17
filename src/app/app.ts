import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports:[],
  //  template: `<h2 class ="box"> Hello World</h2>`,
  // styles: [`.box{
  //    padding: 10px;
  //   background: gold;
  //   border-radius: 10px;
  //   }`]
  templateUrl: './app.html',
  styleUrls: ['./app.css','./button.css']
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
