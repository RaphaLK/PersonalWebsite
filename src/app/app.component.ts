import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <!-- Navigation Bar -->
    <div class="navbar is-dark">
      <div class="navbar-brand">
        <a class="navbar-item">
          Raphael Kusuma
        </a>
      </div>
    </div>
    <!-- Header/Title/Introduction + My Photo :) -->
    <div style="text-align: center">
      <div class="card">
        <img src = '../assets/images/IMG_1829.jpeg' class="imageContainer">
        <h1>Hey! I'm Raphael</h1>
      </div>
    </div>

    <router-outlet></router-outlet>

  <app-footer></app-footer>
  `,
  styles: [`
    .imageContainer {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      overflow: hidden;
    }
  `],
})
export class AppComponent {
  title = 'PersonalWebsite';
}
