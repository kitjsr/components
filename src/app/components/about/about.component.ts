import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  roll:number=10;
  name:String="komal kumari";
  status:boolean=true;
  ngOnInit(){
    console.log(this.roll);
    console.log(this.name);
    console.log(this.status);
  }
}
