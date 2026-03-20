import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 count =signal(0);
 isLoggedIn=signal(false);

 items=signal<string[]>([
  'Angular',"React","Vue"
 ])
 newItem=signal("");

 addItem(){
  this.items.update(()=>[...this.items(),this.newItem()]);
 }

 role=signal<'admin' | 'user'>('user')

 features=signal<string[]>([
  'dashboard','profile','settings'
 ])

 makeAdmin(){
  this.role.set('admin');
  this.features.set([
  'dashboard','profile','settings','admin panel','User Management'
 ])
 }

 makeUser(){
  this.role.set('user');
  this.features.set([
  'dashboard','profile','settings'])
 }

}