import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports:[],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
 items=['c++','c','java','python']

 users=[
  {name:'Rohit',age:38},
  {name:'Virat',age:37},
  {name:'MSD',age:44}
 ]

 removeItem(i:number){
  this.items.splice(i,1);
 }
 num=[1,2,3,4,5,6]
}
