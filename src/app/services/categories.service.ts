import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
    providedIn: 'root',
})
export class CategoriesService {
    private readonly categories: Category[] = [
        { id: 0, name: 'All' },
        { id: 1, name: 'Programming' },
        { id: 2, name: 'Marketing' },
        { id: 3, name: 'Design' },
        { id: 4, name: 'Business' },
    ];

    getAllCategories(): Category[] {
        return this.categories;
    }
}
