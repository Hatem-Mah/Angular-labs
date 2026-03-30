import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'discount',
})
export class DiscountPipe implements PipeTransform {
    transform(value: number, discountPercentage = 10): number {
        if (!Number.isFinite(value)) {
            return value;
        }

        const safeDiscount = Math.max(0, Math.min(discountPercentage, 100));
        return value - (value * safeDiscount) / 100;
    }  
}
