
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

  users = signal<User[]>([]);

  name = signal<string>('');
  email = signal<string>('');
  editingUpdateId = signal<number | null>(null);


  // Clicked Edit
  editUser(user: User) {
    this.editingUpdateId.set(user.id!);
    this.name.set(user.name);
    this.email.set(user.email);

  }

  constructor(private userService: UserService) { }

  // ngOnInit(){
  //   this.userService.getUsers().subscribe((data:any)=>{
  //     this.users=data;
  //   })
  // }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(data => { this.users.set(data) }
    )
  }

  //Add and Update User

  // submitForm() {
  //   const payload: User = {
  //     name: this.name(),
  //     email: this.email(),
  //     isActive: false
  //   };

  //   //Update User
  //   if (this.editingUpdateId() != null) {
  //     this.userService.updateUser(
  //       this.editingUpdateId()!,
  //       payload
  //     ).subscribe(() => {
  //       alert('User Update Successfully');
  //       this.afterSave();
  //     })
  //   }
  //   else{
  //     this.userService.addUser(payload).subscribe(() => {
  //     alert('User Added Successfully');
  //     this.afterSave();
  //   })
  //   }
    
  // }

  submitForm() {
  const payload: User = {
    name: this.name(),
    email: this.email(),
    isActive: false
  };

  // ✅ Update
  if (this.editingUpdateId() != null) {
    this.userService.updateUser(
      this.editingUpdateId()!,
      payload
    ).subscribe(() => {
      alert('User Updated Successfully');
      this.afterSave();
    });

  } 
  // ✅ Add
  else {
    this.userService.addUser(payload).subscribe(() => {
      alert('User Added Successfully');
      this.afterSave();
    });
  }
}

  afterSave() {
    this.loadUsers();
    this.name.set('');
    this.email.set('');
    this.editingUpdateId.set(null);
  }

  toggleStatus(user:User){
    this.userService.updateUserStatus(user.id!,!user.isActive).subscribe(()=>{
      this.users.update(list=>
        list.map(u=> 
          u.id===user.id ?{...u, isActive:!u.isActive}:u
        )
      )
    })
  }

}