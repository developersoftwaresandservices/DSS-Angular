import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryService } from '../services/enquiry.service';

interface Service {
  title: string;
  icon: string; // key for svg selection
  features: string[];
  gradient: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  template: `
    <section id="services" class="relative py-24 bg-slate-50 dark:bg-navy-light transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 class="text-xs sm:text-sm font-bold tracking-widest text-primary dark:text-blue-400 uppercase">What We Offer</h2>
          <p class="text-3xl sm:text-4xl font-extrabold text-navy dark:text-white tracking-tight">
            Our Services & Solutions
          </p>
          <p class="text-slate-gray dark:text-slate-300 text-sm sm:text-base">
            From design to promotion and security, we provide full-lifecycle digital services to power your business growth.
          </p>
          <div class="w-12 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <!-- Grid of Services -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div *ngFor="let service of services" 
               class="glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 dark:hover:border-blue-400/20 transform hover:-translate-y-1.5 border border-slate-200/60 dark:border-white/5">
            
            <!-- Glow background overlay -->
            <div class="absolute -right-12 -top-12 w-24 h-24 rounded-full bg-gradient-to-tr filter blur-2xl opacity-10 group-hover:opacity-25 transition-opacity"
                 [ngClass]="service.gradient"></div>

            <div>
              <!-- Header with Icon -->
              <div class="flex items-center gap-4 mb-5">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center text-primary dark:text-blue-400 bg-white dark:bg-navy shadow-md shadow-black/5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <ng-container [ngSwitch]="service.icon">
                    <!-- Static Website -->
                    <svg *ngSwitchCase="'static'" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <!-- Dynamic Website -->
                    <svg *ngSwitchCase="'dynamic'" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7zM9 12h6m-6 4h6" />
                    </svg>
                    <!-- E-commerce Website -->
                    <svg *ngSwitchCase="'ecommerce'" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <!-- Google Business Profile -->
                    <svg *ngSwitchCase="'gbp'" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <!-- SEO -->
                    <svg *ngSwitchCase="'seo'" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <!-- Meta Ads -->
                    <svg *ngSwitchCase="'ads'" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <!-- Website Hosting -->
                    <svg *ngSwitchCase="'hosting'" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <!-- Website Maintenance -->
                    <svg *ngSwitchCase="'maintenance'" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </ng-container>
                </div>
                <h3 class="text-lg font-extrabold text-navy dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                  {{ service.title }}
                </h3>
              </div>

              <!-- Feature list -->
              <ul class="space-y-2.5 text-slate-gray dark:text-slate-300 text-xs sm:text-sm">
                <li *ngFor="let feat of service.features" class="flex items-start gap-2.5">
                  <svg class="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>
            
            <!-- Bottom spacing / subtle button -->
            <div class="mt-6 pt-4 border-t border-slate-100/50 dark:border-white/5">
              <span class="text-xs font-bold text-primary dark:text-blue-400 flex items-center gap-1.5 cursor-pointer" (click)="scrollToContact(service.title)">
                Inquire Now
                <svg class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
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
export class ServicesComponent {
  constructor(private enquiryService: EnquiryService) {}

  services: Service[] = [
    {
      title: 'Static Website',
      icon: 'static',
      gradient: 'from-blue-500 to-indigo-500',
      features: ['Static Website Design', 'Responsive Layout', 'Fast Loading Times', 'Mobile Friendly', 'Affordable Pricing']
    },
    {
      title: 'Dynamic Website',
      icon: 'dynamic',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Interactive Admin Panel', 'Secure Login System', 'Database Integration', 'Custom Features', 'API Connectors']
    },
    {
      title: 'E-Commerce Website',
      icon: 'ecommerce',
      gradient: 'from-orange-500 to-red-500',
      features: ['Product Management', 'Secure Payment Gateway', 'Real-time Order Tracking', 'Inventory Control', 'Responsive Layout']
    },
    {
      title: 'Google Business Profile',
      icon: 'gbp',
      gradient: 'from-green-500 to-emerald-500',
      features: ['Profile Creation', 'Search Optimization', 'Local Map SEO', 'Q&A Management', 'Review Campaigns', 'Weekly Post Updates']
    },
    {
      title: 'Search Engine Optimization',
      icon: 'seo',
      gradient: 'from-teal-500 to-cyan-500',
      features: ['In-Depth Keyword Research', 'Technical & Schema SEO', 'On-Page Content SEO', 'Local Citation SEO', 'Performance Optimization', 'Improve Google Rankings']
    },
    {
      title: 'Meta Ads',
      icon: 'ads',
      gradient: 'from-blue-600 to-sky-400',
      features: ['Facebook & Instagram Ads', 'Advanced Audience Targeting', 'High-Converting Lead Gen', 'Retargeting Campaigns', 'Monthly Analytics Reports']
    },
    {
      title: 'Website Hosting',
      icon: 'hosting',
      gradient: 'from-violet-500 to-purple-600',
      features: ['Free SSL Certificate', 'Custom Domain Support', 'Automated Daily Backups', 'High-Speed Servers', '99.9% Uptime Guarantee']
    },
    {
      title: 'Website Maintenance',
      icon: 'maintenance',
      gradient: 'from-pink-500 to-rose-500',
      features: ['Ongoing Security Updates', 'Fast Bug Fixes', 'Regular Content Updates', 'Monthly Health Checks', 'Priority Bug Resolution']
    }
  ];

  scrollToContact(serviceTitle: string): void {
    this.enquiryService.setSelectedService(serviceTitle);
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
