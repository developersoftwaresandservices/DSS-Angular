import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  template: `
    <section id="home" class="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100 to-white dark:from-navy dark:via-navy-light dark:to-navy">
      <!-- Glow Effects -->
      <div class="absolute top-1/4 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none dark:bg-primary/5"></div>
      <div class="absolute bottom-10 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-neon-blue/15 rounded-full blur-3xl pointer-events-none dark:bg-neon-blue/5"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Text Content (Col 7) -->
          <div class="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left animate-fade-in-up">
            
            <!-- Trust Badge -->
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 text-xs sm:text-sm font-semibold tracking-wide">
              <svg class="w-4 h-4 text-primary dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span>Affordable & High-Quality Digital Agency</span>
            </div>

            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-navy dark:text-white leading-[1.1]">
              We Build,<br>
              We Promote,<br>
              <span class="text-primary">We Grow!</span>
            </h1>

            <!-- Sub Heading -->
            <p class="text-xl sm:text-2xl text-slate-gray dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Complete digital solutions<br class="hidden sm:block">
              to grow your business online.
            </p>

            <!-- Buttons -->
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button (click)="scrollToSection('contact')" 
                      class="w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-base font-bold tracking-wide shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5">
                Get Free Consultation
              </button>
              
              <button (click)="scrollToSection('services')" 
                      class="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-navy-light hover:bg-slate-50 dark:hover:bg-slate-800 text-navy dark:text-white text-base font-bold tracking-wide border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5">
                View Our Services
              </button>
            </div>

            <!-- Stats/Highlights -->
            <div class="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-slate-200/60 dark:border-white/5 max-w-lg mx-auto lg:mx-0">
              <div class="text-center lg:text-left">
                <p class="text-2xl sm:text-3xl font-extrabold text-navy dark:text-white">100%</p>
                <p class="text-xs sm:text-sm text-slate-gray dark:text-slate-400">Mobile Friendly</p>
              </div>
              <div class="text-center lg:text-left">
                <p class="text-2xl sm:text-3xl font-extrabold text-navy dark:text-white">&lt; 2s</p>
                <p class="text-xs sm:text-sm text-slate-gray dark:text-slate-400">Loading Speed</p>
              </div>
              <div class="text-center lg:text-left">
                <p class="text-2xl sm:text-3xl font-extrabold text-navy dark:text-white">24/7</p>
                <p class="text-xs sm:text-sm text-slate-gray dark:text-slate-400">Support Guidance</p>
              </div>
            </div>

          </div>

          <!-- Image Area (Col 5) -->
          <div class="lg:col-span-5 relative flex justify-center items-center animate-fade-in-up" style="animation-delay: 200ms;">
            <!-- Background Decorative Ring -->
            <div class="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-primary/20 animate-spin-slow dark:border-primary/10"></div>
            
            <div class="relative max-w-md lg:max-w-none w-full animate-float">
              <!-- Visual Mockup Image -->
              <img src="/images/hero_mockup.png" 
                   alt="Modern laptop and mobile showing websites with digital marketing graphics" 
                   class="w-full h-auto object-contain rounded-2xl drop-shadow-2xl relative z-10" />
                   
              <!-- Decorative glass card overlaid behind -->
              <div class="absolute -bottom-6 -left-6 w-36 h-36 glass rounded-2xl -z-0 opacity-80 hidden sm:block"></div>
              <div class="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-tr from-primary to-neon-blue rounded-full filter blur-xl opacity-20 animate-pulse-slow"></div>
            </div>
          </div>

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
export class HeroComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
