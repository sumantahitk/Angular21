import { Component, computed, effect, signal } from '@angular/core';
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

//  constructor(){
//   effect(()=>{
//     console.log("count value: ",this.count());
//   })
//  }

 increment(){
  this.count.set(this.count()+1);
 }

 isDrakMode=signal(false);

//  constructor(){
// effect(()=>{
//     if(this.isDrakMode()){
//       document.body.style.backgroundColor='black';
//       document.body.style.color='white'
//     }else{
//        document.body.style.backgroundColor='white';
//       document.body.style.color='black'
//     }
// })
//  }

 toggle(){
  this.isDrakMode.update(mode=>!mode);
 }

 message=signal("")
 constructor(){
  effect(()=>{
    if(this.message()){
    setTimeout(()=>{
      this.message.set("");

    },2000);
  }
  });
 }

 show(){
  this.message.set("hello this is temporary message")
 }

}
