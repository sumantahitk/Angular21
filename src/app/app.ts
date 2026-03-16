import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Events } from './events/events';


@Component({
  selector: 'app-root',
  imports:[Events],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  name='Angular Tutorial'
  isAdmin=true;

  count=5;
  price=199.99
  isLogin=true;
  title=signal("Angular Tutorial Signal");
  
  getUser(){
    return "Bappa"
  }
}
