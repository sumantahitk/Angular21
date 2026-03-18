import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports:[],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
 isLoggedIn=true;
 marks=65;
 show=true;
 number=0;

 value:string="home";
 
 status:string="processing"
 
 handleNum(e:any){
    this.number=e;
 }

 toggleBox(){
  this.show=!this.show;
 }

}
