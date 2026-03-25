import { Component, effect, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  search=signal('');
   products=signal<string[]>(['Phone','Laptop','Tablet','Monitor','KeyBoard'])

   filtered=signal<string[]>(this.products());
   
  constructor(private router:Router, private route:ActivatedRoute){
     this.route.queryParamMap.subscribe(params =>{
    this.search.set(params.get('search')|| '');
  })
  effect(()=>{
      const value =this.search().toLowerCase();
      this.filtered.set(
        this.products().filter(p=>
          p.toLowerCase().includes(value)
        )
      )
    })
}
  updateURL(){
    this.router.navigate([],{
      queryParams:{search:this.search()}
    })
  }
}
