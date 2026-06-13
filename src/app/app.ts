import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login} from './login/login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Login],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-app');
  name="angular"
  getName(){
    return this.name;
  }
 count:number=0;
 

 handlecount(val:string){
  if(val=='minus'){
    this.count--;
  }
  if(val=='plus'){
    this.count++;
  }
  else if(val=='reset'){
    this.count=0; 
 }
}

}