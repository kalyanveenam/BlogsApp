import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-frontend';
  darkmode = () => {
    console.log('clicked')
    var element = document.body;
    element.style.backgroundColor = 'blue';

  }
}
