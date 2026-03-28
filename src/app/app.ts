import { Component, signal } from '@angular/core';
import { StudentComponent } from './student/student';

@Component({
  selector: 'app-root',
  imports: [StudentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('lab01');
}
