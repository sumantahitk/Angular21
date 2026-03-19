
import { Component, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User{
  name:string;
  age:number
}

@Component({
  selector: 'app-root',
  imports:[FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  username="Sumanta"

  name=signal("Bappa")

  user=signal<{name:string; age:number}>({
    name:"Sumanta Rakshit",
    age:23
  })
 
  updateName(value:string){
    this.user.update(user=>({...user,name:value}));
  }

  updateAge(){
    this.user.update(user=>({...user,age:user.age+1}))
  }
}
