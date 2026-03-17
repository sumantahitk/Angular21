import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports:[],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  value: number = 0;


  // Increment() {
  //   this.value= this.value + 1;
  // }

  //  Decrement() {
  //   this.value-=1;
  // }

  // Reset(){
  //   this.value=0;
  // }

  handle(str:string){
    if(str=='plus'){
      this.value++;
    }else if(str=='minus'){
      this.value--;
    }
    else{
      this.value=0;
    }
  }

 

}
