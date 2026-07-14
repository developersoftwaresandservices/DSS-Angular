import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  template: `
    <section id="faq" class="relative py-24 bg-slate-50 dark:bg-navy-light transition-colors duration-300">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-xs sm:text-sm font-bold tracking-widest text-primary dark:text-blue-400 uppercase">FAQ</h2>
          <p class="text-3xl sm:text-4xl font-extrabold text-navy dark:text-white tracking-tight">
            Frequently Asked Questions
          </p>
          <div class="w-12 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <!-- Accordion List -->
        <div class="space-y-4 max-w-3xl mx-auto">
          <div *ngFor="let item of faqItems; let idx = index" 
               class="glass-card rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/5 transition-all duration-300">
            
            <!-- Accordion Header Toggle -->
            <button (click)="toggleAccordion(idx)" 
                    class="w-full px-6 py-5 flex items-center justify-between text-left font-display font-extrabold text-navy dark:text-white hover:text-primary dark:hover:text-blue-400 transition-colors focus:outline-none text-base sm:text-lg">
              <span>{{ item.question }}</span>
              
              <!-- Toggle Chevron -->
              <span class="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-navy flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-primary/10 transition-transform duration-300"
                    [ngClass]="{ 'rotate-180 bg-primary/15 text-primary dark:text-blue-400': item.isOpen }">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            <!-- Accordion Body -->
            <div class="transition-all duration-300 ease-in-out overflow-hidden"
                 [ngClass]="{ 'max-h-96 border-t border-slate-100 dark:border-white/5': item.isOpen, 'max-h-0': !item.isOpen }">
              <div class="px-6 py-5 text-sm sm:text-base text-slate-gray dark:text-slate-300 leading-relaxed bg-slate-50/30 dark:bg-navy-light/10">
                {{ item.answer }}
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
export class FaqComponent {
  faqItems: FAQItem[] = [
    {
      question: 'How long does a website take to build?',
      answer: 'For a static website (Starter Plan), it typically takes 5 to 7 business days. For dynamic website projects or e-commerce stores, it takes 2 to 3 weeks depending on custom feature parameters, database tables, and API setups.',
      isOpen: true
    },
    {
      question: 'Do you provide website hosting?',
      answer: 'Yes! We offer high-speed website hosting backed by 99.9% uptime server environments. All hosting plans come configured with automated backups, custom domain support, and free SSL certificates.',
      isOpen: false
    },
    {
      question: 'Do you provide search engine optimization (SEO)?',
      answer: 'Absolutely. We provide full SEO campaigns, including in-depth keyword analysis, on-page optimization, technical SEO fixes, structured data integration, and local SEO map ranking improvements.',
      isOpen: false
    },
    {
      question: 'Can you manage Google Business Profiles?',
      answer: 'Yes, we handle profile setups, catalog mapping, keyword optimizations, review strategies, local citations, weekly post updates, and Q&A management to help you lead map rankings.',
      isOpen: false
    },
    {
      question: 'Do you run Facebook and Instagram Ads?',
      answer: 'Yes, we create and execute high-converting Facebook and Instagram Ads campaign models. We structure audience targeting, creative copy, and lead generation funnels, providing monthly performance analytics reports.',
      isOpen: false
    }
  ];

  toggleAccordion(idx: number): void {
    this.faqItems[idx].isOpen = !this.faqItems[idx].isOpen;
    // Close other items
    this.faqItems.forEach((item, index) => {
      if (index !== idx) {
        item.isOpen = false;
      }
    });
  }
}
