import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import emailjs from '@emailjs/browser';
import { EnquiryService } from '../services/enquiry.service';

// EmailJS Configuration - Replace these placeholders with your credentials
const EMAILJS_SERVICE_ID = 'service_t6oow3i';
const EMAILJS_TEMPLATE_ID = 'template_b0g4skk';
const EMAILJS_PUBLIC_KEY = '1XDy6Huc3eoTPou2i';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="relative py-24 bg-white dark:bg-navy transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 class="text-xs sm:text-sm font-bold tracking-widest text-primary dark:text-blue-400 uppercase">Connect</h2>
          <p class="text-3xl sm:text-4xl font-extrabold text-navy dark:text-white tracking-tight">
            Get Free Consultation
          </p>
          <p class="text-slate-gray dark:text-slate-300 text-sm sm:text-base">
            Reach out to discuss your requirements, request a quote, or schedule an advisory call.
          </p>
          <div class="w-12 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          <!-- Column 1: Info & Map (Col 5) -->
          <div class="lg:col-span-5 flex flex-col justify-between gap-8">
            
            <!-- Quick Contacts Card -->
            <div class="glass-card p-6 rounded-2xl space-y-6 border border-slate-200/60 dark:border-white/5">
              
              <h3 class="text-lg font-bold text-navy dark:text-white mb-2">Contact Details</h3>

              <!-- Call Detail -->
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-primary dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-slate-gray dark:text-slate-400">Phone</p>
                  <a href="tel:+916382591208" class="text-sm sm:text-base font-bold text-navy dark:text-white hover:text-primary transition-colors">+91 6382591208</a>
                </div>
              </div>

              <!-- Email Detail -->
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-slate-gray dark:text-slate-400">Email Address</p>
                  <a href="mailto:developersoftwaresandservices@gmail.com" (click)="copyEmail($event)" class="text-xs sm:text-sm font-bold text-navy dark:text-white hover:text-primary transition-colors break-all">developersoftwaresandservices&#64;gmail.com</a>
                </div>
              </div>

              <!-- Action buttons grid -->
              <div class="grid grid-cols-3 gap-3 pt-2">
                <a href="https://wa.me/916382591208?text=Hi%20Developer%20Software's%20and%20Services,%20I'd%20like%20to%20inquire%20about%20your%20services." 
                   target="_blank" 
                   class="py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-1">
                  <span>WhatsApp</span>
                </a>
                <a href="tel:+916382591208" 
                   class="py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-1">
                  <span>Call</span>
                </a>
                <a href="mailto:developersoftwaresandservices@gmail.com" 
                   (click)="copyEmail($event)"
                   class="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-1">
                  <span>Email</span>
                </a>
              </div>

            </div>

            <!-- Map Iframe Wrapper -->
            <div class="glass-card rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/5 flex-grow min-h-[220px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314.16071866087316!2d80.23312775087585!3d13.053506196464197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c2ba887af9%3A0xf1fe0a8771ba5f80!2sDeveloper%20Software&#39;s%20and%20Services!5e1!3m2!1sen!2sin!4v1784052070740!5m2!1sen!2sin" 
                class="w-full h-full min-h-[220px] border-0" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="strict-origin-when-cross-origin">
              </iframe>
            </div>

          </div>

          <!-- Column 2: Form (Col 7) -->
          <div class="lg:col-span-7">
            <div class="glass-card p-8 rounded-2xl border border-slate-200/60 dark:border-white/5 relative h-full flex flex-col justify-between">
              
              <!-- Success Toast Notification -->
              <div *ngIf="isSubmitted" 
                   class="p-4 mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold flex items-center gap-2.5 animate-fade-in-up">
                <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Thank you! Your message has been sent successfully. We will consult you shortly.</span>
              </div>

              <!-- Error Toast Notification -->
              <div *ngIf="submitError" 
                   class="p-4 mb-6 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs sm:text-sm font-semibold flex items-center gap-2.5 animate-fade-in-up">
                <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Oops! Something went wrong while sending your message. Please try calling or emailing us directly.</span>
              </div>

              <!-- Email Copied Toast Notification -->
              <div *ngIf="isEmailCopied" 
                   class="p-4 mb-6 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold flex items-center gap-2.5 animate-fade-in-up">
                <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                <span>Email address copied to clipboard! (developersoftwaresandservices&#64;gmail.com)</span>
              </div>

              <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)" class="space-y-5 flex-grow">
                
                <!-- Name Row -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div class="space-y-1.5">
                    <label for="name" class="text-xs font-bold text-navy/70 dark:text-white/70 uppercase tracking-wider">Your Name</label>
                    <input type="text" 
                           id="name" 
                           name="name" 
                           required 
                           #nameInput="ngModel"
                           [(ngModel)]="formData.name"
                           class="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-navy/50 focus:bg-white dark:focus:bg-navy focus:border-primary dark:focus:border-blue-500 focus:outline-none text-sm transition-all shadow-inner"
                           placeholder="Enter your name" />
                    <!-- Error Text -->
                    <p *ngIf="nameInput.invalid && (nameInput.dirty || nameInput.touched)" class="text-xs text-rose-500 mt-1">Name is required.</p>
                  </div>

                  <div class="space-y-1.5">
                    <label for="phone" class="text-xs font-bold text-navy/70 dark:text-white/70 uppercase tracking-wider">Phone Number</label>
                    <input type="tel" 
                           id="phone" 
                           name="phone" 
                           required 
                           #phoneInput="ngModel"
                           [(ngModel)]="formData.phone"
                           class="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-navy/50 focus:bg-white dark:focus:bg-navy focus:border-primary dark:focus:border-blue-500 focus:outline-none text-sm transition-all shadow-inner"
                           placeholder="Enter 10-digit number" />
                    <p *ngIf="phoneInput.invalid && (phoneInput.dirty || phoneInput.touched)" class="text-xs text-rose-500 mt-1">Phone is required.</p>
                  </div>
                </div>

                <!-- Email Row -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div class="space-y-1.5">
                    <label for="email" class="text-xs font-bold text-navy/70 dark:text-white/70 uppercase tracking-wider">Email Address</label>
                    <input type="email" 
                           id="email" 
                           name="email" 
                           required 
                           email
                           #emailInput="ngModel"
                           [(ngModel)]="formData.email"
                           class="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-navy/50 focus:bg-white dark:focus:bg-navy focus:border-primary dark:focus:border-blue-500 focus:outline-none text-sm transition-all shadow-inner"
                           placeholder="name@example.com" />
                    <p *ngIf="emailInput.invalid && (emailInput.dirty || emailInput.touched)" class="text-xs text-rose-500 mt-1">
                      <span *ngIf="emailInput.errors?.['required']">Email is required.</span>
                      <span *ngIf="emailInput.errors?.['email']">Please enter a valid email.</span>
                    </p>
                  </div>

                  <div class="space-y-1.5">
                    <label for="service-required" class="text-xs font-bold text-navy/70 dark:text-white/70 uppercase tracking-wider">Service Required</label>
                    <select id="service-required" 
                            name="service" 
                            required 
                            #serviceInput="ngModel"
                            [(ngModel)]="formData.service"
                            class="w-full px-4 py-[15px] rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-navy/50 focus:bg-white dark:focus:bg-navy focus:border-primary dark:focus:border-blue-500 focus:outline-none text-sm transition-all shadow-inner text-navy dark:text-white">
                      <option value="" disabled selected>Select a Service</option>
                      <option value="Static Website">Static Website</option>
                      <option value="Dynamic Website">Dynamic Website</option>
                      <option value="E-Commerce Website">E-Commerce Website</option>
                      <option value="Google Business Profile">Google Business Profile</option>
                      <option value="Search Engine Optimization">Search Engine Optimization (SEO)</option>
                      <option value="Meta Ads">Meta Ads (FB / Insta)</option>
                      <option value="Website Hosting">Website Hosting</option>
                      <option value="Website Maintenance">Website Maintenance</option>
                      <option value="Starter Plan">Starter Plan</option>
                      <option value="Business Plan">Business Plan</option>
                      <option value="Premium Plan">Premium Plan</option>
                      <option value="Corporate Website">Corporate Website</option>
                      <option value="Business Website">Business Website</option>
                      <option value="E-Commerce Store">E-Commerce Store</option>
                      <option value="Healthcare Website">Healthcare Website</option>
                      <option value="Educational Website">Educational Website</option>
                      <option value="Restaurant Website">Restaurant Website</option>
                    </select>
                    <p *ngIf="serviceInput.invalid && (serviceInput.dirty || serviceInput.touched)" class="text-xs text-rose-500 mt-1">Please select a service.</p>
                  </div>
                </div>

                <!-- Message -->
                <div class="space-y-1.5">
                  <label for="message" class="text-xs font-bold text-navy/70 dark:text-white/70 uppercase tracking-wider">Your Message</label>
                  <textarea id="message" 
                            name="message" 
                            rows="4" 
                            required 
                            #msgInput="ngModel"
                            [(ngModel)]="formData.message"
                            class="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-navy/50 focus:bg-white dark:focus:bg-navy focus:border-primary dark:focus:border-blue-500 focus:outline-none text-sm transition-all shadow-inner"
                            placeholder="Tell us details about your project requirements..."></textarea>
                  <p *ngIf="msgInput.invalid && (msgInput.dirty || msgInput.touched)" class="text-xs text-rose-500 mt-1">Message is required.</p>
                </div>

                <!-- Submit Button -->
                <button type="submit" 
                        [disabled]="contactForm.invalid || isSubmitting"
                        class="w-full py-4 rounded-xl bg-primary hover:bg-primary-hover disabled:bg-slate-300 dark:disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold tracking-wide shadow-md transition-all duration-300 transform active:scale-95 cursor-pointer">
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </form>

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
export class ContactComponent implements OnInit, OnDestroy {
  private enquirySub!: Subscription;

  constructor(private enquiryService: EnquiryService) {}

  ngOnInit(): void {
    this.enquirySub = this.enquiryService.getSelectedService().subscribe(service => {
      if (service) {
        this.formData.service = service;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.enquirySub) {
      this.enquirySub.unsubscribe();
    }
  }

  formData: ContactForm = {
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  };

  isSubmitted = false;
  isSubmitting = false;
  submitError = false;
  isEmailCopied = false;

  copyEmail(event: MouseEvent): void {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('developersoftwaresandservices@gmail.com').then(() => {
        this.isEmailCopied = true;
        setTimeout(() => {
          this.isEmailCopied = false;
        }, 4000);
      });
    }
  }

  onSubmit(form: any): void {
    if (form.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitError = false;
      this.isSubmitted = false;

      const templateParams = {
        from_name: this.formData.name,
        from_phone: this.formData.phone,
        from_email: this.formData.email,
        service_required: this.formData.service,
        message: this.formData.message,
        to_email: 'developersoftwaresandservices@gmail.com'
      };

      emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY
        }
      )
        .then(() => {
          console.log('Email successfully sent via EmailJS!');
          this.isSubmitted = true;
          this.isSubmitting = false;

          // Reset form model
          this.formData = {
            name: '',
            phone: '',
            email: '',
            service: '',
            message: ''
          };
          form.resetForm({
            service: ''
          });

          // Hide success banner after 8 seconds
          setTimeout(() => {
            this.isSubmitted = false;
          }, 8000);
        })
        .catch((error) => {
          console.error('Failed to send email via EmailJS:', error);
          this.submitError = true;
          this.isSubmitting = false;

          // Hide error banner after 8 seconds
          setTimeout(() => {
            this.submitError = false;
          }, 8000);
        });
    }
  }
}
