import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeShortNamePipe } from './pipe/pipe-short-name-pipe';
import { ConvertPipe } from './pipe/convert-pipe';

interface User{
  name:string;
  age:number
}

@Component({
  selector: 'app-root',
  imports:[CommonModule,ConvertPipe,PipeShortNamePipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  fullName="Sumanta Rakshit";
  usd1 =10;
  usdToInr=85

}
