import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
    providedIn: 'root',
})
export class CoursesService {
    private readonly courses: Course[] = [
        {
            id: 1,
            title: 'Angular Fundamentals',
            instructor: 'Sarah Ahmed',
            price: 49.99,
            seats: 18,
            Image: '/imgs/angular.svg',
            catId: 1,
            category: 'Programming',
        },
        {
            id: 2,
            title: 'TypeScript Essentials',
            instructor: 'Omar Khaled',
            price: 34.5,
            seats: 12,
            Image: '/imgs/typescript_5968421.png',
            catId: 1,
            category: 'Programming',
        },
        {
            id: 3,
            title: 'RxJS in Action',
            instructor: 'Mona Adel',
            price: 42,
            seats: 2,
            Image: '/imgs/R.png',
            catId: 2,
            category: 'Marketing',
        },
        {
            id: 4,
            title: 'Frontend Performance',
            instructor: 'Youssef Nabil',
            price: 55,
            seats: 14,
            Image: '/imgs/f.png',
            catId: 2,
            category: 'Design',
        },
        {
            id: 5,
            title: 'UI Design Basics',
            instructor: 'Nour Hassan',
            price: 29.99,
            seats: 20,
            Image: '/imgs/ui.png',
            catId: 3,
            category: 'Design',
        },
    ];

    getCoursesByCatID(catID: number): Course[] {
        return this.courses.filter((course) => course.catId === catID);
    }

    getCourseByID(courseID: number): Course {
        const course = this.courses.find((item) => item.id === courseID);
        if (!course) {
            throw new Error(`Course with id ${courseID} was not found.`);
        }

        return course;
    }
}