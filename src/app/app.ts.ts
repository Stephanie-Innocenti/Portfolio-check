import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
// import { CustomCursor } from './custom-cursor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,Header],
  templateUrl:'./app.ts.html',
})
export class AppComponent {
}
