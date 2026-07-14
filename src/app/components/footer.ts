import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  template: `
    <footer class="relative bg-slate-900 text-white pt-16 pb-12 transition-colors duration-300">
      
      <!-- Top Section -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        
        <!-- Company Info (Col 5) -->
        <div class="md:col-span-5 space-y-4">
          <div class="flex flex-col items-start cursor-pointer" (click)="scrollToSection('home')">
            <div class="flex items-center gap-2">
              <!-- SVG Logo -->
              <!-- <svg viewBox="0 0 100 100" class="h-10 w-10 md:h-12 md:w-12" fill="none">
                <defs>
                  <linearGradient id="footerLogoBlue" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#60A5FA" />
                    <stop offset="100%" stop-color="#1E3A8A" />
                  </linearGradient>
                </defs>
                <path d="M 40 15 L 65 15 C 85 15 95 30 95 50 C 95 70 85 85 65 85 L 40 85 C 35 85 35 80 35 80 L 35 20 C 35 20 35 15 40 15 Z" fill="url(#footerLogoBlue)" />
                <path d="M 48 27 L 62 27 C 75 27 82 36 82 50 C 82 64 75 73 62 73 L 48 73 Z" fill="#0f172a" />
                
                <rect x="25" y="15" width="8" height="8" fill="#3B82F6"/>
                <rect x="35" y="25" width="8" height="8" fill="#60A5FA"/>
                <rect x="15" y="25" width="8" height="8" fill="#3B82F6"/>
                <rect x="25" y="35" width="8" height="8" fill="#60A5FA"/>
                <rect x="35" y="35" width="8" height="8" fill="#1E3A8A"/>
                
                <text x="60" y="58" text-anchor="middle" font-family="monospace" font-weight="900" font-size="22" fill="#ffffff">&lt;/&gt;</text>
              </svg> -->
              <svg width="39" height="35" viewBox="0 0 39 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4154 1.3692L17.9973 1.3702C22.1001 1.37229 25.46 1.16004 29.4053 2.60808C33.2333 3.99705 36.362 6.89587 38.0966 10.6607C37.9952 10.8057 38.0585 10.7458 37.8832 10.8266C37.6998 10.8075 37.6489 10.7039 37.5174 10.5431L37.3943 10.6792C37.1502 10.5727 37.1272 10.508 36.8677 10.4867C36.5719 10.6322 36.474 10.8409 36.1259 10.9082C35.3461 11.0589 34.7877 11.2337 33.9697 11.3186C32.9839 11.4209 31.6421 10.5905 30.8512 11.5973C30.7529 11.7226 30.9132 11.7067 30.7932 11.8764L30.7276 11.8958C30.4052 11.4344 30.047 11.0009 29.6555 10.5996C26.8766 7.75774 23.8954 7.56865 20.2973 7.56919L16.3526 7.57228L16.3503 11.7045L10.4158 11.706L10.4154 1.3692Z" fill="url(#paint0_linear_2311_38)"/>
<path d="M31.8794 24.1752C32.196 24.0228 33.9444 23.6813 34.3057 23.7452C35.4164 23.9418 36.4168 24.1075 37.5952 23.9111C38.1023 23.8267 38.7329 23.6026 39.2643 23.6467L39.3321 23.6922L39.3848 24.4398C39.3688 24.6624 39.0832 25.5859 39.0035 25.821C38.2174 28.1943 36.9181 30.3546 35.203 32.1402C32.3191 35.1083 28.6214 36.5628 24.591 36.8975C22.9427 37.0342 21.2178 36.9947 19.559 36.9947L11.7134 36.9952C14.6295 36.0942 17.4941 35.0256 20.2936 33.7954C24.8217 31.7851 29.9561 29.1507 31.8794 24.1752Z" fill="url(#paint1_linear_2311_38)"/>
<path d="M30.7277 11.8958L30.7932 11.8764C30.9132 11.7067 30.7529 11.7226 30.8512 11.5973C31.6421 10.5905 32.984 11.4209 33.9697 11.3186C34.7877 11.2337 35.3461 11.0589 36.126 10.9082C36.474 10.8409 36.5719 10.6321 36.8677 10.4867C37.1272 10.5079 37.1503 10.5727 37.3943 10.6792L37.5174 10.5431C37.6489 10.7039 37.6998 10.8075 37.8832 10.8266C38.0586 10.7458 37.9952 10.8057 38.0966 10.6607C39.9783 14.444 40.5766 20.3855 39.3849 24.4398L39.3322 23.6922L39.2644 23.6466C38.733 23.6026 38.1024 23.8267 37.5953 23.9111C36.4169 24.1074 35.4165 23.9418 34.3059 23.7452C33.9445 23.6813 32.1961 24.0228 31.8795 24.1752C33.3298 20.2524 32.9977 15.4273 30.7277 11.8958Z" fill="url(#paint2_linear_2311_38)"/>
<path d="M10.4261 27.386L16.3568 27.3883L16.3513 30.2533L19.9138 30.2583C22.9159 30.2596 24.4397 30.2783 27.2677 28.9554C25.9901 29.8623 24.6722 30.6243 23.2932 31.3536C22.9247 31.5611 22.5151 31.7537 22.1342 31.9376C18.3423 33.7691 14.3679 35.1932 10.411 36.5873C10.3772 34.2432 10.4301 31.8854 10.4093 29.5399C10.4029 28.8269 10.4037 28.0971 10.4261 27.386Z" fill="url(#paint3_linear_2311_38)"/>
<path d="M11.0432 13.3738C12.1931 13.3332 13.5791 13.3729 14.7481 13.3737C12.595 15.3551 10.4133 17.5136 8.28982 19.5477L13.913 24.8393L13.6848 25.384L13.488 25.7799L11.0327 25.7789L6.87745 21.9805C6.25516 21.4099 5.60342 20.8462 5.00332 20.2711C4.61645 19.8494 4.6048 19.2573 5.01652 18.8651C6.98386 16.9907 9.06082 15.2307 11.0432 13.3738Z" fill="#001137"/>
<path d="M24.204 13.3607C24.2899 13.4138 24.3501 13.4617 24.4263 13.5281C26.1893 15.065 27.911 16.6973 29.6798 18.2231C30.1288 18.6106 30.8042 19.2312 30.3529 19.8402C29.9756 20.3486 29.3755 20.9669 28.9513 21.4452L25.7947 25.0246C25.6286 25.0956 23.2036 25.0619 22.8546 25.0618L25.6423 21.689C26.2477 20.9604 26.8827 20.1682 27.5182 19.4732C26.4882 18.4682 25.2668 17.3612 24.196 16.3991L24.204 13.3607Z" fill="#0246D0"/>
<path d="M20.8429 12.0203L22.8278 12.0221C20.9877 16.6223 18.956 21.2017 17.0607 25.7796L15.0852 25.7791C15.7438 24.1851 16.4149 22.5966 17.0984 21.0136L20.8429 12.0203Z" fill="#001137"/>
<path d="M6.79544 8.83215L9.0405 8.83288L9.04196 11.1478L6.79309 11.1482L6.79544 8.83215Z" fill="#001137"/>
<path d="M6.81852 0.821945L9.0421 0.819946C9.04714 1.5994 9.04183 2.37884 9.02611 3.15811L6.7958 3.16084C6.79673 2.68388 6.75151 1.23297 6.81852 0.821945Z" fill="#001137"/>
<path d="M6.13019 5.21137L8.27118 5.21014L8.27034 7.48283L6.12183 7.47983L6.13019 5.21137Z" fill="#001137"/>
<path d="M3.21109 2.16236L5.35818 2.15973L5.34614 4.39622L3.20829 4.39731C3.19988 3.65773 3.20923 2.90321 3.21109 2.16236Z" fill="#0246D0"/>
<path d="M0.640015 4.75824L2.6396 4.76246C2.64682 5.446 2.6427 6.12963 2.62724 6.81308C1.96625 6.80463 1.30513 6.80795 0.64422 6.82302L0.640015 4.75824Z" fill="#005AEF"/>
<path d="M0.0119111 0.00540346L1.97368 0L1.96624 2.0696L0.00602147 2.07123C-0.0036326 1.38265 -0.00168427 0.693938 0.0119111 0.00540346Z" fill="#005AEF"/>
<path d="M3.56298 7.63466C4.05626 7.61382 4.55203 7.6225 5.04589 7.62563C5.0524 8.15636 5.05231 8.68718 5.04563 9.21795C4.55212 9.21432 4.05015 9.22131 3.55593 9.22358C3.54876 8.69394 3.55111 8.16421 3.56298 7.63466Z" fill="#005AEF"/>
<defs>
<linearGradient id="paint0_linear_2311_38" x1="24.5645" y1="13.0911" x2="22.1976" y2="-0.583821" gradientUnits="userSpaceOnUse">
<stop stop-color="#0047DA"/>
<stop offset="1" stop-color="#0070FF"/>
</linearGradient>
<linearGradient id="paint1_linear_2311_38" x1="26.2136" y1="36.6736" x2="25.2755" y2="24.4122" gradientUnits="userSpaceOnUse">
<stop stop-color="#000D2C"/>
<stop offset="1" stop-color="#002978"/>
</linearGradient>
<linearGradient id="paint2_linear_2311_38" x1="35.959" y1="24.2512" x2="34.9925" y2="10.6081" gradientUnits="userSpaceOnUse">
<stop stop-color="#00297B"/>
<stop offset="1" stop-color="#004ADD"/>
</linearGradient>
<linearGradient id="paint3_linear_2311_38" x1="19.2395" y1="33.988" x2="13.8151" y2="25.3797" gradientUnits="userSpaceOnUse">
<stop stop-color="#00319A"/>
<stop offset="1" stop-color="#0051EA"/>
</linearGradient>
</defs>
</svg>


              <!-- Text Logo -->
              <div class="flex flex-col justify-center">
                <div class="flex items-center font-display font-extrabold text-[1.4rem] md:text-[1.75rem] tracking-widest leading-none text-white">
                  <span>D</span>
                  <div class="flex flex-col justify-center gap-[4px] mx-0.5 h-[1.4rem]">
                    <div class="w-[0.8rem] md:w-[1rem] h-[3px] md:h-[4px] bg-blue-500 rounded-sm"></div>
                    <div class="w-[0.8rem] md:w-[1rem] h-[3px] md:h-[4px] bg-blue-500 rounded-sm"></div>
                    <div class="w-[0.8rem] md:w-[1rem] h-[3px] md:h-[4px] bg-blue-500 rounded-sm"></div>
                  </div>
                  <span>VELOPER</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2 mt-1.5 w-[240px] md:w-[280px] px-1">
              <div class="h-px bg-blue-500/50 flex-1"></div>
              <span class="text-[0.45rem] md:text-[0.55rem] font-bold text-blue-400 tracking-[0.2em] uppercase whitespace-nowrap">
                Software's and Services
              </span>
              <div class="h-px bg-blue-500/50 flex-1"></div>
            </div>
          </div>
          <p class="text-slate-400 text-sm max-w-sm leading-relaxed mt-4">
            Professional web development, search engine optimization, Google Business Profile rankings, and Meta Ads management engineered to help your business scale.
          </p>
          
          <!-- Social Icons -->
          <div class="flex items-center gap-4 pt-2">
            <a *ngFor="let social of socials" 
               [href]="social.url" 
               target="_blank"
               [attr.aria-label]="social.name"
               class="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary text-white/70 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1">
              <ng-container [ngSwitch]="social.icon">
                <!-- Facebook -->
                <svg *ngSwitchCase="'facebook'" class="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
                <!-- Instagram -->
                <svg *ngSwitchCase="'instagram'" class="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <!-- LinkedIn -->
                <svg *ngSwitchCase="'linkedin'" class="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>

              </ng-container>
            </a>
          </div>

        </div>

        <!-- Quick Links (Col 3) -->
        <div class="md:col-span-3 space-y-4">
          <h4 class="text-sm font-bold uppercase tracking-wider text-slate-300">Quick Links</h4>
          <ul class="space-y-2.5 text-slate-400 text-sm">
            <li><a (click)="scrollToSection('services')" class="hover:text-blue-400 cursor-pointer transition-colors">Services</a></li>
            <li><a (click)="scrollToSection('portfolio')" class="hover:text-blue-400 cursor-pointer transition-colors">Portfolio</a></li>
            <li><a (click)="scrollToSection('about')" class="hover:text-blue-400 cursor-pointer transition-colors">About Us</a></li>
            <li><a (click)="scrollToSection('contact')" class="hover:text-blue-400 cursor-pointer transition-colors">Contact</a></li>
          </ul>
        </div>

        <!-- Info (Col 4) -->
        <div class="md:col-span-4 space-y-4">
          <h4 class="text-sm font-bold uppercase tracking-wider text-slate-300">Legal & Location</h4>
          <p class="text-slate-400 text-sm leading-relaxed">
            Developer Software's and Services.<br>
            Providing digital engineering services and Meta Campaigns scale internationally.
          </p>
          <p class="text-xs text-slate-500">
            Powered by pre-rendered modern Angular architecture.
          </p>
        </div>

      </div>

      <!-- Bottom copyright -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
        <p>© 2026 Developer Software's and Services. All Rights Reserved.</p>
        <p class="flex items-center gap-1.5">
          <span>We Build</span>
          <span class="text-blue-500">•</span>
          <span>We Promote</span>
          <span class="text-blue-500">•</span>
          <span>We Grow</span>
        </p>
      </div>

      <!-- Floating Scroll-to-Top Button -->
      <button (click)="scrollToTop()" 
              [ngClass]="{ 'opacity-100 translate-y-0 pointer-events-auto': showScrollBtn, 'opacity-0 translate-y-6 pointer-events-none': !showScrollBtn }"
              class="fixed bottom-6 right-6 p-3 rounded-full bg-primary hover:bg-primary-hover text-white shadow-xl shadow-primary/20 transition-all duration-300 z-50 cursor-pointer border border-white/10"
              aria-label="Scroll to top">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>

    </footer>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FooterComponent implements OnInit {
  showScrollBtn = false;

  socials = [
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/people/Developer-Softwares-and-Services/61592001740745/' },
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/developer_softwares_services' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/developer-software-s-and-services-3084aa422' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScroll();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScroll();
    }
  }

  checkScroll(): void {
    this.showScrollBtn = window.scrollY > 400;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
