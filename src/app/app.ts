import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login} from './login/login';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Login,FormsModule],
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


// userName = signal("Shanvi");

// constructor(){
//      effect(()=>{
//       console.log(this.userName())
//      })
// }

// users=['shanvi','anil','pratyaksh','pranjal','sam','anjali','kapil' ];

// name="shnavi"

task='';
taskList:{id:number,task:string}[]=[];

addTask(){
    this.taskList.push({id:this.taskList.length+1,task:this.task});
    this.task="";
    console.log(this.taskList)
}

delete(taskId:number){
  this.taskList = this.taskList.filter((item)=>item.id!=taskId);
}

}
