import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Testimonial {
  rating: number;
  text: string;
  name: string;
  role: string;
  company: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="relative py-24 bg-slate-50 dark:bg-navy-light transition-colors duration-300">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-xs sm:text-sm font-bold tracking-widest text-primary dark:text-blue-400 uppercase">Reviews</h2>
          <p class="text-3xl sm:text-4xl font-extrabold text-navy dark:text-white tracking-tight">
            Client Testimonials
          </p>
          <div class="w-12 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <!-- Testimonial Slider Card Container -->
        <div class="glass-card rounded-3xl p-8 sm:p-12 relative shadow-lg shadow-black/5 border border-slate-200/60 dark:border-white/5 overflow-hidden min-h-[250px] flex flex-col justify-between">
          
          <!-- Quote Icon -->
          <div class="absolute -right-4 -top-4 text-slate-100 dark:text-white/5 text-9xl font-serif pointer-events-none select-none">
            “
          </div>

          <!-- Active Testimonial Content -->
          <div class="space-y-6 relative z-10 transition-opacity duration-300">
            <!-- Stars -->
            <div class="flex items-center gap-1">
              <svg *ngFor="let star of [1,2,3,4,5]" 
                   class="w-5 h-5 text-amber-400 fill-current" 
                   viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>

            <!-- Quote Text -->
            <p class="text-lg sm:text-xl font-medium text-navy dark:text-white leading-relaxed italic">
              "{{ activeTestimonial.text }}"
            </p>
          </div>

          <!-- Author Info & Nav Buttons -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 mt-8 border-t border-slate-100 dark:border-white/5 relative z-10">
            <div>
              <h4 class="text-base font-extrabold text-navy dark:text-white">{{ activeTestimonial.name }}</h4>
              <p class="text-xs text-slate-gray dark:text-slate-400 mt-0.5">
                {{ activeTestimonial.role }}, <span class="text-primary dark:text-blue-400 font-semibold">{{ activeTestimonial.company }}</span>
              </p>
            </div>

            <!-- Action Controls -->
            <div class="flex items-center gap-3 self-end sm:self-auto">
              <button (click)="prev()" 
                      class="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white hover:bg-slate-100 dark:bg-navy-light dark:hover:bg-slate-800 text-navy dark:text-white transition-colors shadow-sm"
                      aria-label="Previous testimonial">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button (click)="next()" 
                      class="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white hover:bg-slate-100 dark:bg-navy-light dark:hover:bg-slate-800 text-navy dark:text-white transition-colors shadow-sm"
                      aria-label="Next testimonial">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        <!-- Slider Dots -->
        <div class="flex justify-center items-center gap-2 mt-6">
          <button *ngFor="let test of testimonials; let idx = index" 
                  (click)="goToIndex(idx)"
                  class="w-2.5 h-2.5 rounded-full transition-all duration-300"
                  [ngClass]="{ 'bg-primary w-6': idx === currentIndex, 'bg-slate-300 dark:bg-slate-700': idx !== currentIndex }"
                  aria-label="Go to testimonial slide"></button>
        </div>

      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      rating: 5,
      text: 'Professional service and timely delivery. Highly recommended.',
      name: 'Rajesh Kumar',
      role: 'Founder',
      company: 'RK Corporate Solutions'
    },
    {
      rating: 5,
      text: 'Our Google Map Business profile views jumped by 300% in just two weeks! Excellent local SEO strategy and communication.',
      name: 'Anita Sharma',
      role: 'Director',
      company: 'Care Medical Diagnostics'
    },
    {
      rating: 5,
      text: 'The e-commerce site they built is incredibly fast, and customer checkout works flawlessly. Support is always on point.',
      name: 'Vikram Singh',
      role: 'Managing Partner',
      company: 'Heritage Silk Exports'
    }
  ];

  currentIndex = 0;
  autoPlayInterval: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  get activeTestimonial(): Testimonial {
    return this.testimonials[this.currentIndex];
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, 7000);
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToIndex(idx: number): void {
    this.currentIndex = idx;
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
