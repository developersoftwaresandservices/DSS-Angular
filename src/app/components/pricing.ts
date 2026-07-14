import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryService } from '../services/enquiry.service';

interface Plan {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  popular: boolean;
  ctaText: string;
  gradient: string;
}

@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  template: `
    <section id="pricing" class="relative py-24 bg-white dark:bg-navy transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 class="text-xs sm:text-sm font-bold tracking-widest text-primary dark:text-blue-400 uppercase">Plans</h2>
          <p class="text-3xl sm:text-4xl font-extrabold text-navy dark:text-white tracking-tight">
            Simple, Transparent Pricing
          </p>
          <p class="text-slate-gray dark:text-slate-300 text-sm sm:text-base">
            Choose the package that fits your stage of growth. No hidden costs.
          </p>
          <div class="w-12 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <!-- Pricing Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          <div *ngFor="let plan of plans" 
               class="glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:shadow-xl transform hover:-translate-y-1.5 border"
               [ngClass]="{ 
                 'border-primary dark:border-blue-500 shadow-lg ring-1 ring-primary/20 scale-100 md:scale-105 z-10': plan.popular, 
                 'border-slate-200/60 dark:border-white/5': !plan.popular 
               }">
            
            <!-- Most Popular Badge -->
            <div *ngIf="plan.popular" 
                 class="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
              Most Popular
            </div>

            <!-- Card Header -->
            <div>
              <span class="text-xs font-bold text-primary dark:text-blue-400 uppercase tracking-widest">{{ plan.name }}</span>
              <h3 class="text-xl font-bold text-navy dark:text-white mt-1 mb-4">{{ plan.desc }}</h3>
              
              <div class="flex items-baseline mb-6">
                <span class="text-4xl sm:text-5xl font-extrabold text-navy dark:text-white">{{ plan.price }}</span>
                <span class="text-xs text-slate-gray dark:text-slate-400 ml-2 font-medium">{{ plan.period }}</span>
              </div>

              <!-- Divider -->
              <div class="h-px bg-slate-100 dark:bg-white/5 mb-6"></div>

              <!-- Features -->
              <ul class="space-y-3.5 mb-8">
                <li *ngFor="let feat of plan.features" class="flex items-center gap-3 text-slate-gray dark:text-slate-300 text-xs sm:text-sm">
                  <svg class="w-4 h-4 text-primary dark:text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>

            <!-- CTA Button -->
            <button (click)="selectPlan(plan.name)" 
                    class="w-full py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 transform active:scale-95 shadow-md"
                    [ngClass]="{
                      'bg-primary hover:bg-primary-hover text-white shadow-primary/20 hover:shadow-primary/35': plan.popular,
                      'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-navy dark:text-white border border-transparent': !plan.popular
                    }">
              {{ plan.ctaText }}
            </button>

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
export class PricingComponent {
  constructor(private enquiryService: EnquiryService) {}

  plans: Plan[] = [
    {
      name: 'Starter',
      price: '₹4,999',
      period: 'One-Time Dev',
      desc: 'Ideal for small local businesses starting out.',
      features: [
        'Static Website',
        'Up to 5 Pages',
        'Mobile Responsive Design',
        'Basic Contact Form',
        'Social Media Integration',
        'Standard Loading Speed'
      ],
      popular: false,
      ctaText: 'Get Started',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Business',
      price: '₹14,999',
      period: 'One-Time Dev',
      desc: 'Perfect for growing companies needing backend control.',
      features: [
        'Dynamic Website',
        'Admin Dashboard Panel',
        'User/Login Security System',
        'Database Integration',
        'SEO Ready Tags & Schema',
        'Website Hosting Support',
        'Priority SSL Support'
      ],
      popular: true,
      ctaText: 'Choose Business Plan',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Premium',
      price: 'Custom',
      period: 'Project Quote',
      desc: 'Full-suite custom design + marketing campaign.',
      features: [
        'Fully Custom Application',
        'Advanced Search SEO Rankings',
        'Google Business Optimization',
        'Meta Ads Campaign Setup',
        '6-Month Maintenance Bundle',
        'Dedicated Priority Support',
        'High-Speed Server Setup'
      ],
      popular: false,
      ctaText: 'Inquire Quote',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  selectPlan(planName: string): void {
    const planMap: { [key: string]: string } = {
      'Starter': 'Starter Plan',
      'Business': 'Business Plan',
      'Premium': 'Premium Plan'
    };
    const mappedName = planMap[planName] || (planName + ' Plan');
    this.enquiryService.setSelectedService(mappedName);

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const yOffset = -80;
      const y = contactSection.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
