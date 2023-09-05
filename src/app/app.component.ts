import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style = "text-align: center">
      <b>
        <h1>Hello, I'm Raph!</h1>
      </b>
      <img src = '../assets/images/IMG_1829.jpeg' class="imageContainer">
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .imageContainer {
      width: 15%;
      height: 15%;
      border-radius: 50%;
      overflow: hidden;
      border: "10px solid #FF000";
    }
  `],
})
export class AppComponent {
  title = 'PersonalWebsite';
}
