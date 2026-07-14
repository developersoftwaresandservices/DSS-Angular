import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Benefit {
  title: string;
  desc: string;
}

@Component({
  selector: 'app-why-choose-us',
  imports: [CommonModule],
  template: `
    <section id="why-choose-us" class="relative py-24 bg-white dark:bg-navy transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Content (Col 5) -->
          <div class="lg:col-span-5 space-y-6">
            <h2 class="text-xs sm:text-sm font-bold tracking-widest text-primary dark:text-blue-400 uppercase">Value Proposition</h2>
            <h3 class="text-3xl sm:text-4xl font-extrabold text-navy dark:text-white tracking-tight">
              Why Partner With Us?
            </h3>
            <p class="text-slate-gray dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              We translate technical complexity into real business value. Our solutions are designed to build trust, generate leads, and establish your brand authority.
            </p>
            
            <!-- Highlight Box -->
            <div class="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-neon-blue/5 border border-primary/10 dark:border-blue-500/10">
              <div class="flex gap-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-blue-400">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-extrabold text-navy dark:text-white text-base">Growth & Support Commitment</h4>
                  <p class="text-xs sm:text-sm text-slate-gray dark:text-slate-400 mt-1">
                    Every project comes with standard post-deployment maintenance and strategic marketing guidance to ensure you grow long after launching.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Grid (Col 7) -->
          <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div *ngFor="let benefit of benefits" 
                 class="p-5 rounded-xl border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-navy-light/40 hover:bg-white dark:hover:bg-navy-light hover:shadow-md hover:border-primary/20 dark:hover:border-blue-400/20 transition-all duration-300">
              
              <!-- Check icon -->
              <div class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <!-- Content -->
              <h4 class="font-bold text-navy dark:text-white text-sm mb-1.5">{{ benefit.title }}</h4>
              <p class="text-xs text-slate-gray dark:text-slate-400 leading-normal">{{ benefit.desc }}</p>
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
export class WhyChooseUsComponent {
  benefits: Benefit[] = [
    {
      title: 'Affordable Pricing',
      desc: 'Top-tier development and marketing solutions that fit your budget margins.'
    },
    {
      title: 'Professional Dev',
      desc: 'Clean codebase built with scalable Angular patterns for reliability.'
    },
    {
      title: 'SEO Friendly Websites',
      desc: 'Optimized tags, structural schema, and semantic layouts for search visibility.'
    },
    {
      title: 'Mobile Responsive',
      desc: 'Pixel-perfect, fluid layouts optimized for smartphones, tablets, and desktops.'
    },
    {
      title: 'Fast Delivery',
      desc: 'Agile sprints ensure your project launches on schedule without delays.'
    },
    {
      title: 'Lifetime Support Guidance',
      desc: 'Continuous advisory support to help you manage your site as your company grows.'
    },
    {
      title: 'Secure Hosting',
      desc: 'Protected server environments with SSL certificates and daily backups.'
    },
    {
      title: 'Modern UI Design',
      desc: 'Stunning visual interfaces modeled on modern corporate and startup websites.'
    },
    {
      title: 'Dedicated Support',
      desc: 'Quick support responses for content changes, bug fixes, or consulting.'
    }
  ];
}
