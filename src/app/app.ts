
import { Component, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User{
  name:string;
  age:number
}

@Component({
  selector: 'app-root',
  imports:[FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  task=signal<string>("");
  arr=signal<number[]>([]);
  
  setTask(e:any){
    this.arr.update(arr=>[...arr,e]);
  }

  removeItem(i:number){
    if(this.arr().length>0){
       this.arr().splice(i,1);
    }
 
 }
  
}
