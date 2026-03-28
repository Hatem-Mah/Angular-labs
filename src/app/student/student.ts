import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

export interface Student {
  id: number;
  name: string;
  age: number;
  photoUrl: string;
}

@Component({
  selector: 'app-student',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class StudentComponent {
  students: Student[] = [
    {
      id: 1,
      name: 'Hatem',
      age: 22,
      photoUrl: '/imgs/me%20(2).jpg',
    },
    {
      id: 2,
      name: 'Hatem Mahmoud',
      age: 22,
      photoUrl: '/imgs/me%20croped.jpg',
    },
  ];
}
