import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DecimalPipe, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course } from '../models/course';
import { Category } from '../models/category';
import { DiscountPipe } from '../shared/pipes/discount.pipe';
import { DisableAfterClickDirective } from '../shared/directives/disable-after-click.directive';
import { CoursesService } from '../services/courses.service';
import { CategoriesService } from '../services/categories.service';

@Component({
    selector: 'app-courses',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgOptimizedImage, FormsModule, DecimalPipe, DiscountPipe, DisableAfterClickDirective],
    templateUrl: './courses.html',
    styleUrl: './courses.css',
})
export class CoursesComponent {
    private readonly coursesService = inject(CoursesService);
    private readonly categoriesService = inject(CategoriesService);

    discountPlaygroundPrice: number | null = 1000;
    customDiscountPercentage: number | null = 20;
    showLockedButtonDemo = true;

    selectedCategoryId = 0;
    categories: Category[] = this.categoriesService.getAllCategories();
    private readonly allCategoryIds = this.categories
        .filter((category) => category.id !== 0)
        .map((category) => category.id);

    courses: Course[] = this.getAllCourses();

    get filteredCourses(): Course[] {
        if (this.selectedCategoryId === 0) {
            return this.getAllCourses();
        }
        return this.coursesService.getCoursesByCatID(this.selectedCategoryId);
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
