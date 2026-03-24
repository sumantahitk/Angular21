
import { Component, signal } from '@angular/core';
import { Card } from './card/card';
import { Button } from './button/button';
import { FormField } from './form-field/form-field';
import { email } from '@angular/forms/signals';



@Component({
  selector: 'app-root',
  imports: [Card,Button,FormField],
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

  email=""
  onEmailChange(value:string){
    console.log("Email: ",value);
    this.email=value;
  }
  
}