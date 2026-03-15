import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
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
