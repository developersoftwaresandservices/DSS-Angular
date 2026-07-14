import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryService } from '../services/enquiry.service';

interface Project {
  title: string;
  category: string;
  mockupClass: string;
  techs: string[];
  demoUrl: string;
  desc: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  template: `
    <section id="portfolio" class="relative py-24 bg-white dark:bg-navy transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 class="text-xs sm:text-sm font-bold tracking-widest text-primary dark:text-blue-400 uppercase">Recent Work</h2>
          <p class="text-3xl sm:text-4xl font-extrabold text-navy dark:text-white tracking-tight">
            Our Selected Portfolio
          </p>
          <p class="text-slate-gray dark:text-slate-300 text-sm sm:text-base">
            Take a look at some of the digital platforms we've built, optimized, and deployed for our clients.
          </p>
          <div class="w-12 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <!-- Project Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let proj of projects" 
               class="glass-card rounded-2xl overflow-hidden flex flex-col group hover:shadow-xl hover:shadow-black/5 hover:border-primary/20 dark:hover:border-blue-400/20 transition-all duration-300 border border-slate-200/60 dark:border-white/5">
            
            <!-- Browser Chrome Mockup Screen -->
            <div class="relative h-48 w-full bg-slate-100 dark:bg-navy-light flex flex-col overflow-hidden border-b border-slate-200/50 dark:border-white/5">
              <!-- Browser Header -->
              <div class="h-6 px-3 bg-slate-200/80 dark:bg-navy/80 flex items-center gap-1.5 flex-shrink-0">
                <span class="w-2 h-2 rounded-full bg-red-400"></span>
                <span class="w-2 h-2 rounded-full bg-yellow-400"></span>
                <span class="w-2 h-2 rounded-full bg-green-400"></span>
                <div class="h-3.5 w-40 bg-white/70 dark:bg-white/10 rounded-md mx-auto text-[8px] text-center text-slate-400 flex items-center justify-center select-none font-sans">
                  www.{{ proj.title.toLowerCase().replace(' ', '') }}.com
                </div>
              </div>
              
              <!-- Screen Body Graphic -->
              <div class="flex-grow p-4 bg-gradient-to-br flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500"
                   [ngClass]="proj.mockupClass">
                   
                <!-- Decorative Abstract Shapes -->
                <div class="absolute w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
                <div class="absolute w-16 h-16 rounded-full bg-black/10 blur-lg bottom-2 right-2"></div>
                
                <!-- Mockup App Title -->
                <span class="font-display font-extrabold text-lg text-white drop-shadow-md tracking-tight z-10 flex items-center gap-2">
                  <span>{{ proj.title }}</span>
                </span>
                
                <!-- Graphic UI Cards (Simulated Dashboard) -->
                <div class="absolute bottom-2 left-4 right-4 h-12 bg-white/90 dark:bg-navy/90 backdrop-blur-md rounded-lg shadow-sm p-2 flex items-center justify-between gap-2 border border-white/20">
                  <div class="space-y-1 w-2/3">
                    <div class="h-2 w-full bg-slate-300 dark:bg-slate-700 rounded"></div>
                    <div class="h-1.5 w-2/3 bg-slate-200 dark:bg-slate-800 rounded"></div>
                  </div>
                  <div class="w-7 h-7 rounded-md bg-primary/20 dark:bg-primary/40 flex items-center justify-center text-[10px] text-primary dark:text-blue-400 font-extrabold">
                    UI
                  </div>
                </div>
              </div>
            </div>

            <!-- Content Area -->
            <div class="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span class="text-xs font-bold text-primary dark:text-blue-400 uppercase tracking-widest">{{ proj.category }}</span>
                <h3 class="text-xl font-bold text-navy dark:text-white mt-1 mb-2">{{ proj.title }}</h3>
                <p class="text-xs sm:text-sm text-slate-gray dark:text-slate-400 mb-4 leading-relaxed">{{ proj.desc }}</p>
              </div>

              <!-- Footer with Tech Stack and Action Button -->
              <div>
                <div class="flex flex-wrap gap-1.5 mb-5">
                  <span *ngFor="let tech of proj.techs" 
                        class="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-white/5">
                    {{ tech }}
                  </span>
                </div>
                
                <button (click)="scrollToContact(proj.title)" 
                        class="w-full py-2.5 rounded-xl border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary hover:text-white dark:text-blue-400 dark:bg-primary/10 dark:hover:bg-primary dark:hover:text-white text-xs font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-1.5">
                  <span>Live Demo</span>
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
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
export class PortfolioComponent {
  constructor(private enquiryService: EnquiryService) {}

  projects: Project[] = [
    {
      title: 'Corporate Website',
      category: 'Enterprise',
      mockupClass: 'from-blue-600 to-indigo-600',
      techs: ['Angular', 'TypeScript', 'Tailwind CSS', 'SSR', 'Pre-rendering'],
      demoUrl: '#',
      desc: 'A premium, high-speed corporate site designed with interactive modules, subpages, and animations.'
    },
    {
      title: 'Business Website',
      category: 'Agency / Local',
      mockupClass: 'from-slate-800 to-navy',
      techs: ['HTML5', 'Tailwind CSS', 'Google Maps API', 'SEO Optimized'],
      demoUrl: '#',
      desc: 'Clean business site optimized for local lead capture, fast mobile viewing, and SEO placement.'
    },
    {
      title: 'E-Commerce Store',
      category: 'Digital Retail',
      mockupClass: 'from-pink-600 to-rose-600',
      techs: ['Angular', 'Express.js', 'MongoDB', 'Stripe Payments', 'Inventory Admin'],
      demoUrl: '#',
      desc: 'Robust store displaying inventory trackers, payment configurations, and order management dashboard.'
    },
    {
      title: 'Healthcare Website',
      category: 'Medical / Service',
      mockupClass: 'from-teal-500 to-emerald-600',
      techs: ['Angular', 'Tailwind CSS', 'Booking Form', 'Schema Markup'],
      demoUrl: '#',
      desc: 'Responsive clinic platform featuring appointment scheduling, staff reviews, and doctor rosters.'
    },
    {
      title: 'Educational Website',
      category: 'Institution / LMS',
      mockupClass: 'from-violet-600 to-purple-600',
      techs: ['Angular', 'TypeScript', 'LMS Engine', 'Course Grid'],
      demoUrl: '#',
      desc: 'Interactive platform showcasing school curriculum modules, student forms, and course directories.'
    },
    {
      title: 'Restaurant Website',
      category: 'Food / Hospitality',
      mockupClass: 'from-amber-500 to-orange-600',
      techs: ['HTML5', 'Tailwind CSS', 'Interactive Menu', 'WhatsApp Ordering'],
      demoUrl: '#',
      desc: 'Attractive foodie landing page showcasing a clean digital menu, table booking, and quick WhatsApp connect.'
    }
  ];

  scrollToContact(projectTitle: string): void {
    this.enquiryService.setSelectedService(projectTitle);
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
