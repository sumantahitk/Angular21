import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  count = 0;
  increment(){
    this.count++;
  }

  count1 = signal(0);
  increment1(){
    this.count1.update((c)=>c+1);
  }
  showEvent(e:any){
    console.log(e)
  }

  username='';
  updateUser(value:string){
    this.username=value;
  }

  handleSubmit(e:any){
    e.preventDefault();
    console.log("form submit")
  }
}
