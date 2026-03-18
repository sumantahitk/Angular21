import { Component, signal } from '@angular/core';
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
 val=20
 name= signal<string>('Angular')

 num=signal<number[]>([1,2,3,4]);
 
 user=signal<{name:string,age:number}>({
  name:'Sumanta',
  age:23
 })

 u=signal<User>({
   name:'Sumanta',
  age:23
 })
 // count.update(c=>c+1);
    increment(){
      this.count.update(c=>c+1);
    }
    decrement(){
      this.count.update(c=>c-1);
    }
    reset(){
      this.count.set(0);
    }

    addNumber(){
    this.num.update(arr=>[...arr,6])
}

setNumber(){
  this.num.set([100,200,300])
}
}
