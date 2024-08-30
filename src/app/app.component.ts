import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
imports: [RouterOutlet, CommonModule],
templateUrl: './app.component.html',
styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'my-angular-project-1'; 
  responseData: any;
 loadData: boolean = false;
 constructor(private http: HttpClient){}

  getData(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data)=>{
      this.responseData = data;
      // console.log(data);
     this.loadData = true;
     
    });
  }

}
