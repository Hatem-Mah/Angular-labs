import { Component, signal } from '@angular/core';
import { StudentComponent } from './student/student';
import { CoursesComponent } from './courses/courses';

@Component({
  selector: 'app-root',
  imports: [StudentComponent, CoursesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('lab01');
}
