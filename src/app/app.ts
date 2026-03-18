import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports:[],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
 count= signal(10);//signal created
 val=20
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
}
