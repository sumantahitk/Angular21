import { Component, signal } from '@angular/core';
import { CounterStore } from './core/store/counter';
import { UserStore } from './core/store/user';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(public counterStore:CounterStore, public userStore:UserStore){}

  handleLogin(name: string, role: string) {
  if (role === 'admin' || role === 'user') {
    this.userStore.login(name, role); // ✅ no error now
  }
}
  
}