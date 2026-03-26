import { afterEveryRender, afterNextRender, Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  @Input() title!:string;

  constructor(){
    console.log('1.Constructor');
    afterNextRender(()=>{
      console.log("4.AfterNextRender");
    })
    afterEveryRender(()=>{
      console.log("4.AfterEveryRender");
    })
  }
  
  ngOnChanges(change: SimpleChanges){
    console.log("2.ngOnChanges", change);
  }
  ngOnInit(){
    console.log("3.ngOnInit");
  }

  ngOndestroy(){
     console.log("5.ngOnDestroy");
  }
}
