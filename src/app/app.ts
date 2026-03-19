import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

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

  count=signal(0);
  name=signal('Angular')

  setCount(){
    this.count.set(2);
  }

  val=signal(2);
  price=signal(6);


  doubleVal=computed(()=>this.val()*2);

  total=computed(()=>this.val()*this.price());

  constructor(){
    effect(()=>{
      console.log("Total: ",this.total());
    })
  }

  increment(){
    this.val.update(c=>c+1);
  }
  updatePrice(){
    this.price.update(p=>p+1);
  }
}
