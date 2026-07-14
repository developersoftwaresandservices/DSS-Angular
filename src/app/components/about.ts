import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  template: `
    <section id="about" class="relative py-24 bg-white dark:bg-navy transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 class="text-xs sm:text-sm font-bold tracking-widest text-primary dark:text-blue-400 uppercase">About Us</h2>
          <p class="text-3xl sm:text-4xl font-extrabold text-navy dark:text-white tracking-tight">
            Developer Software's and Services
          </p>
          <div class="w-12 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Column 1: Main Story (Col 6) -->
          <div class="lg:col-span-6 space-y-6">
            <h3 class="text-2xl font-bold text-navy dark:text-white leading-tight">
              We empower businesses by building high-performing, secure digital ecosystems.
            </h3>
            
            <p class="text-slate-gray dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              We help businesses establish a strong online presence through professional web development, digital marketing, Google Business Profile optimization, SEO, Meta Ads management, hosting, and ongoing maintenance.
            </p>
            
            <p class="text-slate-gray dark:text-slate-300 text-base sm:text-lg leading-relaxed font-semibold">
              Our mission is to provide affordable, scalable, and high-quality digital solutions that help businesses grow.
            </p>
            
            <!-- Quick Values -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div class="flex items-center gap-3">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-blue-400">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-navy dark:text-white text-sm">Affordable Scalability</h4>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-blue-400">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-navy dark:text-white text-sm">Security-First Focus</h4>
                </div>
              </div>
            </div>
          </div>

          <!-- Column 2: Visual Pillars Grid (Col 6) -->
          <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <!-- Web Dev Card -->
            <div class="glass-card p-6 rounded-2xl hover:border-primary/30 dark:hover:border-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
              <div class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 class="text-lg font-bold text-navy dark:text-white mb-2">Build</h4>
              <p class="text-xs sm:text-sm text-slate-gray dark:text-slate-400">
                Sleek static and dynamic websites engineered with clean code for high responsiveness.
              </p>
            </div>

            <!-- Marketing Card -->
            <div class="glass-card p-6 rounded-2xl hover:border-primary/30 dark:hover:border-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
              <div class="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h4 class="text-lg font-bold text-navy dark:text-white mb-2">Promote</h4>
              <p class="text-xs sm:text-sm text-slate-gray dark:text-slate-400">
                Data-driven Meta Ads and Local SEO solutions that place your business in front of buyers.
              </p>
            </div>

            <!-- SEO Card -->
            <div class="glass-card p-6 rounded-2xl hover:border-primary/30 dark:hover:border-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 class="text-lg font-bold text-navy dark:text-white mb-2">Grow</h4>
              <p class="text-xs sm:text-sm text-slate-gray dark:text-slate-400">
                Google Business Profile optimization to dominate local search query map-packs.
              </p>
            </div>

            <!-- Support Card -->
            <div class="glass-card p-6 rounded-2xl hover:border-primary/30 dark:hover:border-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
              <div class="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 class="text-lg font-bold text-navy dark:text-white mb-2">Support</h4>
              <p class="text-xs sm:text-sm text-slate-gray dark:text-slate-400">
                High-speed server hosting, monthly health checks, and responsive support guidance.
              </p>
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
export class AboutComponent {}
