
import { CommonModule } from '@angular/common';
import { Component, inject, signal, Signal } from '@angular/core';




@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

 name=signal('');


  // Submit function
  submit() {
    console.log('User Name:', this.name());
  }
}