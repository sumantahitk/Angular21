
import { Component, signal } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { HeaderComp } from './header-comp/header-comp';



@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, HeaderComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  
  
}