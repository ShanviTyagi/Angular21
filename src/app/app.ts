import { Component, effect, signal } from '@angular/core';
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
//   name="angular"
//   val=" "
//   displayName=""
 
//  count:number=0;
 

//  handlecount(val:string){
//   if(val=='minus'){
//     this.count--;
//   }
//   if(val=='plus'){
//     this.count++;
//   }
//   else if(val=='reset'){
//     this.count=0; 
//  }
// }

// getName(event:Event){
//   const val =(event.target as HTMLInputElement).value;
//    this.val=val;
// }

// showName(){
//   this.displayName=this.val;
// }

// setName(){
//   this.val="shanvi Tyagi"
// }

// display=true;  //for if else condition
// x=10;

// hide(){
//   this.display=false;
// }

// show(){
//   this.display=true;
// }

// toggle(){
//   this.display=!this.display;
// }

users=["shanvi","priya","sneha","suman","satyam"];
students=[
  {name:"shanvi",age:22,city:"delhi"},
  {name:"priya",age:23,city:"noida"},
  {name:"sneha",age:24,city:"gurgaon"},
  {name:"suman",age:25,city:"faridabad"},
  {name:"satyam",age:26,city:"ghaziabad"}
]

count =signal(10);
x=20;

constructor(){
  effect(()=>{
        console.log(this.count());
  })
}

updateValue(val:string){
   if(val=='inc'){
    this.count.set(this.count()+1);
   }

   else{
    this.count.set(this.count()-1);
   }
}

}