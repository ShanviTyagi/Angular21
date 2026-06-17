import { Component, computed, effect, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgFor,
    Header,ReactiveFormsModule,NgIf,FormsModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-app');
  // Simple To-Do state
  // task = '';
  // taskList: { id: number; task: string }[] = [];

  // addTask() {
  //   if (!this.task || !this.task.trim()) return;
  //   this.taskList.push({ id: this.taskList.length + 1, task: this.task.trim() });
  //   this.task = '';
  // }

  // delete(taskId: number) {
  //   this.taskList = this.taskList.filter((item) => item.id !== taskId);
  // }
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

// task='';
// taskList:{id:number,task:string}[]=[];

// addTask(){
//     this.taskList.push({id:this.taskList.length+1,task:this.task});
//     this.task="";
//     console.log(this.taskList)
// }

// delete(taskId:number){
//   this.taskList = this.taskList.filter((item)=>item.id!=taskId);
// }

// students=["anil","sam","peter","bby","kittu"]

// name= new FormControl();
// password= new FormControl();
//  displayValue(){
//     console.log(this.name.value,this.password.value)
//  }
// setValues() {
//   this.name.setValue('peter');
//   this.password.setValue('123456');
// }

  //  profileForm = new FormGroup({
  //     name:new FormControl('',[Validators.required]),
  //     password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  //     email : new FormControl('',[Validators.required,Validators.maxLength(5)]),
  //  });

  //  onSubmit(){
  //    console.log(this.profileForm.value);
  //  }

//   setValue() {
//   this.profileForm.setValue({
//     name: 'Peter',
//     password: '123456',
//     email: 'peter@gmail.com'
//   });
// }

// get name(){
//     return this.profileForm.get('name');
// }


// get pass(){
//     return this.profileForm.get('pass');
// }


// get email(){
//     return this.profileForm.get('email');
// }

addDetails(val:NgForm){
    console.log(val)
}

}
