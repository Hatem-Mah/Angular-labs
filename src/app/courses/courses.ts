import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DecimalPipe, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course } from '../models/course';
import { DiscountPipe } from '../shared/pipes/discount.pipe';
import { DisableAfterClickDirective } from '../shared/directives/disable-after-click.directive';
import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'app-courses',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgOptimizedImage, FormsModule, DecimalPipe, DiscountPipe, DisableAfterClickDirective],
    templateUrl: './courses.html',
    styleUrl: './courses.css',
})
export class CoursesComponent {
    private readonly coursesService = inject(CoursesService);

    discountPlaygroundPrice: number | null = 1000;
    customDiscountPercentage: number | null = 20;
    showLockedButtonDemo = true;

    selectedCategory = 'All';
    categories: string[] = ['All', 'Programming', 'Design', 'Marketing', 'Business'];
    private readonly categoryIdMap: Record<string, number> = {
        Programming: 1,
        Marketing: 2,
        Design: 3,
        Business: 4,
    };
    private readonly allCategoryIds = [1, 2, 3, 4];

    courses: Course[] = this.getAllCourses();

    get filteredCourses(): Course[] {
        if (this.selectedCategory === 'All') {
            return this.getAllCourses();
        }

        const categoryId = this.categoryIdMap[this.selectedCategory];
        return categoryId ? this.coursesService.getCoursesByCatID(categoryId) : [];
    }

    get playgroundPrice(): number {
        return this.discountPlaygroundPrice ?? 0;
    }

    get playgroundDiscount(): number {
        return this.customDiscountPercentage ?? 0;
    }

    register(course: Course): void {
        const selectedCourse = this.coursesService.getCourseByID(course.id);
        if (selectedCourse.seats > 0) {
            selectedCourse.seats -= 1;
        }
    }

    resetLockedButtonDemo(): void {
        this.showLockedButtonDemo = false;
        setTimeout(() => {
            this.showLockedButtonDemo = true;
        }, 0);
    }

    private getAllCourses(): Course[] {
        return this.allCategoryIds.flatMap((categoryId) => this.coursesService.getCoursesByCatID(categoryId));
    }
}
