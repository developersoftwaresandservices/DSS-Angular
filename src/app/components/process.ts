import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  num: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-process',
  imports: [CommonModule],
  template: `
    <section id="process" class="relative py-24 bg-slate-50 dark:bg-navy-light transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 class="text-xs sm:text-sm font-bold tracking-widest text-primary dark:text-blue-400 uppercase">Workflow</h2>
          <p class="text-3xl sm:text-4xl font-extrabold text-navy dark:text-white tracking-tight">
            Our Development Process
          </p>
          <p class="text-slate-gray dark:text-slate-300 text-sm sm:text-base">
            We follow a structured roadmap to ensure quality, transparency, and timely delivery at every phase.
          </p>
          <div class="w-12 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <!-- Horizontal / Vertical Timeline -->
        <div class="relative">
          
          <!-- Connecting Line (Desktop only) -->
          <div class="hidden lg:block absolute top-[43px] left-8 right-8 h-0.5 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 dark:from-blue-500/10 dark:via-blue-500/30 dark:to-blue-500/10 z-0"></div>

          <!-- Timeline Items Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
            <div *ngFor="let step of steps; let i = index" 
                 class="flex flex-col items-center lg:items-start text-center lg:text-left group relative">
              
              <!-- Timeline Icon/Node -->
              <div class="w-16 h-16 rounded-full bg-white dark:bg-navy border-2 border-slate-200 dark:border-white/5 flex items-center justify-center font-display font-extrabold text-lg text-primary dark:text-blue-400 shadow-md shadow-black/5 group-hover:border-primary dark:group-hover:border-blue-400 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/15 transition-all duration-300 z-10 mb-4">
                {{ step.num }}
              </div>

              <!-- Content -->
              <h4 class="font-bold text-navy dark:text-white text-sm mb-1.5 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                {{ step.title }}
              </h4>
              
              <p class="text-xs text-slate-gray dark:text-slate-400 leading-relaxed max-w-[200px]">
                {{ step.desc }}
              </p>

              <!-- Arrow / Connector (Mobile/Tablet vertical spacer) -->
              <div *ngIf="i < steps.length - 1" class="lg:hidden w-px h-8 bg-slate-300 dark:bg-white/10 my-4 md:hidden"></div>
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
export class ProcessComponent {
  steps: Step[] = [
    {
      num: '01',
      title: 'Requirement Discussion',
      desc: 'We brainstorm your business requirements and align objectives.'
    },
    {
      num: '02',
      title: 'Planning',
      desc: 'Sitemap structuring, tech choice alignments, and timelines design.'
    },
    {
      num: '03',
      title: 'UI Design',
      desc: 'Sleek component wireframing and interactive UI mockups creation.'
    },
    {
      num: '04',
      title: 'Development',
      desc: 'Pixel-perfect, semantic coding with clean scalable architecture.'
    },
    {
      num: '05',
      title: 'Testing',
      desc: 'Rigorous responsive sizing, link checks, and cross-browser testing.'
    },
    {
      num: '06',
      title: 'Deployment',
      desc: 'Pre-rendered compile launch, SSL installation, and Google analytics mapping.'
    },
    {
      num: '07',
      title: 'Support & Maintenance',
      desc: 'Regular monthly health checks, bug resolution, and content updates.'
    }
  ];
}
