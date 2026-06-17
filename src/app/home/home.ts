import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {

  // users=[
  //   {
  //     id:'1',
  //     name:"shanvi",
  //     age:20,
  //     email:"snwetyagi@gmail.com"
  //   },
  //    {
  //     id:'2',
  //     name:"baby",
  //     age:21,
  //     email:"bbytyagi@gmail.com"
  //   },
  //    {
  //     id:'3',
  //     name:"krish",
  //     age:20,
  //     email:"krishtyagi@gmail.com"
  //   },
  //    {
  //     id:'4',
  //     name:"peter",
  //     age:29,
  //     email:"petertyagi@gmail.com"
  //   }
  // ]
}
