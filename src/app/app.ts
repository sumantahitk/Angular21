
import { Component, signal } from '@angular/core';
import { Card } from './card/card';
import { Button } from './button/button';



@Component({
  selector: 'app-root',
  imports: [Card,Button],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // saveData(){
  //   console.log('Data Fetch')
  // }
  
  message="";
  onSave(msg:string){
    console.log(msg);
    this.message=msg;
  }
  
}