import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-project';
  getName(name:any){
    alert(name)
  };
  functionTwo(){
    alert("Function two is calling")
  }
}
