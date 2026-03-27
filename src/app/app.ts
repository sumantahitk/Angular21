
import { CommonModule } from '@angular/common';
import { Component, inject, signal, Signal } from '@angular/core';


import { toSignal } from '@angular/core/rxjs-interop';
import { User } from './models/user';
import { UserService } from './services/user';



@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
 users=signal<User[]>([]);

 name=signal<string>('');
 email=signal<string>('');


 constructor(private userService: UserService) {}

  // ngOnInit(){
  //   this.userService.getUsers().subscribe((data:any)=>{
  //     this.users=data;
  //   })
  // }

   ngOnInit(){
   this.loadUsers();
  }

  loadUsers(){
    this.userService.getUsers().subscribe(data=>
      {this.users.set(data)}
    )
  }

  submitForm(){
    const payload: User={
      name:this.name(),
      email:this.email(),
      isActive:false
    };
    this.userService.addUser(payload).subscribe(()=>{
      alert('User Added Successfully');
      this.loadUsers();
      this.name.set('');
      this.email.set('');
    })
  }
//   loading = true;

// ngOnInit(){
//   this.userService.getUsers().subscribe((data:any)=>{
//     this.users = data;
//     this.loading = false;
//   });
// }


  // userservice=inject(UserService);
  // users=toSignal<User[]>(this.userservice.getUsers());


}