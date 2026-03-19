import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface User{
  name:string;
  age:number
}

@Component({
  selector: 'app-root',
  imports:[CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  lname="mohit";
  uname="Mohit"
 
  today=new Date()

  amount=2500

  per =0.35

  user={
    name:'Sumanta',
    age:23
  }

}
