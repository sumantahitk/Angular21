import { Component, EventEmitter, input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  name = input<string>();

  @Output() notify= new EventEmitter<string>();
  sentToParent(){
    this.notify.emit('Hello Parent EventEmit')
  }

  message=signal('Hello Parent (Signal)')
  
  updateMessage(){
    this.message.set('Updated from child Component')
  }
  
}
