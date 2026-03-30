import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DecimalPipe, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course } from '../models/course';
import { DiscountPipe } from '../shared/pipes/discount.pipe';
import { DisableAfterClickDirective } from '../shared/directives/disable-after-click.directive';

@Component({
    selector: 'app-courses',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgOptimizedImage, FormsModule, DecimalPipe, DiscountPipe, DisableAfterClickDirective],
    templateUrl: './courses.html',
    styleUrl: './courses.css',
})
export class CoursesComponent {
    discountPlaygroundPrice: number | null = 1000;
    customDiscountPercentage: number | null = 20;
    showLockedButtonDemo = true;

    selectedCategory = 'All';
    categories: string[] = ['All', 'Programming', 'Design', 'Marketing', 'Business'];

    courses: Course[] = [
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

    get filteredCourses(): Course[] {
        if (this.selectedCategory === 'All') {
            return this.courses;
        }
        return this.courses.filter((course) => course.category === this.selectedCategory);
    }

    get playgroundPrice(): number {
        return this.discountPlaygroundPrice ?? 0;
    }

    get playgroundDiscount(): number {
        return this.customDiscountPercentage ?? 0;
    }

    register(course: Course): void {
        if (course.seats > 0) {
            course.seats -= 1;
        }
    }

    resetLockedButtonDemo(): void {
        this.showLockedButtonDemo = false;
        setTimeout(() => {
            this.showLockedButtonDemo = true;
        }, 0);
    }
}
