import { Directive, ElementRef, Input, OnDestroy, inject } from '@angular/core';

@Directive({
    selector: 'button[appDisableAfterClick]',
    host: {
        '(click)': 'onClick()',
    },
})
export class DisableAfterClickDirective implements OnDestroy {
    private readonly buttonRef = inject(ElementRef<HTMLButtonElement>);
    private timerId: ReturnType<typeof setTimeout> | null = null;
    private originalText = '';

    @Input() processingText = 'Processing...';
    @Input() reEnableDelayMs = 3000;
    @Input() appDisableAfterClickCanReenable = true;

    onClick(): void {
        const button = this.buttonRef.nativeElement;

        if (button.disabled) {
            return;
        }

        this.originalText = button.textContent?.trim() ?? '';
        button.disabled = true;
        button.textContent = this.processingText;

        this.clearTimer();
        this.timerId = setTimeout(() => {
            button.textContent = this.originalText;

            if (this.appDisableAfterClickCanReenable) {
                button.disabled = false;
            }
        }, this.reEnableDelayMs);
    }

    ngOnDestroy(): void {
        this.clearTimer();
    }

    private clearTimer(): void {
        if (this.timerId !== null) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }
    }
}
