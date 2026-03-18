import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface User{
  name:string;
  age:number
}

@Component({
  selector: 'app-root',
  imports:[],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
 count= signal<number>(10);//signal created
 
 doubleCount = computed<number>(()=>this.count()*2)

 tripleCount=computed<number>(()=>this.count()*3)

 increment(){
  this.count.set(this.count()+1);
 }

firstName = signal<string>('Praveen');
lastName = signal<string>('Kumar');

fullName = computed<string>(() => 
  `${this.firstName()} ${this.lastName()}`
);

price=signal<number[]>([10,23,45,27,13])
total=computed<number>(()=>{
  return this.price().reduce((acc,curr)=> acc+curr,0);
})

}
