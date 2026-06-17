import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class User {

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(){
    this.route.params.subscribe((params)=>{
        console.log(params);
    })
  }
}
