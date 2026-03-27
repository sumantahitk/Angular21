
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { UserService } from './user';
import { toSignal } from '@angular/core/rxjs-interop';



@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
//  users:any[] = [];

//  constructor(private userService: UserService) {}

//   // ngOnInit(){
//   //   this.userService.getUsers().subscribe((data:any)=>{
//   //     this.users=data;
//   //   })
//   // }

//   loading = true;

// ngOnInit(){
//   this.userService.getUsers().subscribe((data:any)=>{
//     this.users = data;
//     this.loading = false;
//   });
// }


  userservice=inject(UserService);
  users:any=toSignal(this.userservice.getUsers());
}