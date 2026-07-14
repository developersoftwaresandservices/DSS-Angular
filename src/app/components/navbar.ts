import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300" 
         [ngClass]="{ 'glass py-3 shadow-md': isScrolled, 'py-5 bg-transparent': !isScrolled }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center cursor-pointer" (click)="scrollToSection('home')">
            <div class="flex flex-col items-center">
              <div class="flex items-center gap-2">
                <!-- SVG Logo -->
                <!-- <svg viewBox="0 0 100 100" class="h-10 w-10 md:h-12 md:w-12" fill="none">
                  <defs>
                    <linearGradient id="logoBlue" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#3B82F6" />
                      <stop offset="100%" stop-color="#020617" />
                    </linearGradient>
                  </defs>
                  <path d="M 40 15 L 65 15 C 85 15 95 30 95 50 C 95 70 85 85 65 85 L 40 85 C 35 85 35 80 35 80 L 35 20 C 35 20 35 15 40 15 Z" fill="url(#logoBlue)" />
                  <path d="M 48 27 L 62 27 C 75 27 82 36 82 50 C 82 64 75 73 62 73 L 48 73 Z" fill="currentColor" class="text-white dark:text-slate-900" />
                  
                  <rect x="25" y="15" width="8" height="8" fill="#3B82F6"/>
                  <rect x="35" y="25" width="8" height="8" fill="#1D4ED8"/>
                  <rect x="15" y="25" width="8" height="8" fill="#3B82F6"/>
                  <rect x="25" y="35" width="8" height="8" fill="#1D4ED8"/>
                  <rect x="35" y="35" width="8" height="8" fill="#020617"/>
                  
                  <text x="60" y="58" text-anchor="middle" font-family="monospace" font-weight="900" font-size="22" fill="#020617" class="dark:fill-white text-navy dark:text-white">&lt;/&gt;</text>
                </svg> -->

                <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
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


                <!-- <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4984 1.70221L21.5966 1.70346C26.52 1.70605 30.5519 1.44217 35.2863 3.24244C39.8798 4.96927 43.6343 8.5732 45.7159 13.2539C45.5942 13.4341 45.6702 13.3597 45.4597 13.46C45.2397 13.4363 45.1786 13.3075 45.0208 13.1076L44.873 13.2768C44.5802 13.1444 44.5526 13.0639 44.2412 13.0375C43.8862 13.2183 43.7688 13.4779 43.3511 13.5615C42.4152 13.7489 41.7451 13.9662 40.7636 14.0718C39.5807 14.199 37.9705 13.1665 37.0214 14.4182C36.9034 14.574 37.0958 14.5542 36.9517 14.7652L36.8731 14.7894C36.4862 14.2157 36.0563 13.6767 35.5865 13.1778C32.2519 9.64472 28.6744 9.40963 24.3566 9.41031L19.6231 9.41414L19.6203 14.5515L12.4989 14.5534L12.4984 1.70221Z" fill="url(#paint0_linear_2311_38)"/>
<path d="M38.2552 30.0557C38.6352 29.8662 40.7332 29.4417 41.1669 29.5211C42.4997 29.7655 43.7001 29.9715 45.1142 29.7274C45.7227 29.6225 46.4794 29.3438 47.1171 29.3986L47.1984 29.4552L47.2617 30.3847C47.2426 30.6615 46.8998 31.8096 46.8041 32.1019C45.8609 35.0525 44.3017 37.7382 42.2435 39.9581C38.7829 43.6482 34.3456 45.4565 29.5092 45.8726C27.5313 46.0426 25.4614 45.9935 23.4708 45.9935L14.056 45.994C17.5554 44.8739 20.9929 43.5454 24.3523 42.016C29.7861 39.5166 35.9473 36.2415 38.2552 30.0557Z" fill="url(#paint1_linear_2311_38)"/>
<path d="M36.8732 14.7894L36.9518 14.7653C37.0958 14.5543 36.9035 14.574 37.0214 14.4183C37.9705 13.1665 39.5807 14.199 40.7637 14.0718C41.7452 13.9662 42.4153 13.7489 43.3511 13.5616C43.7688 13.4779 43.8863 13.2184 44.2413 13.0375C44.5527 13.064 44.5803 13.1445 44.8731 13.2769L45.0208 13.1077C45.1787 13.3075 45.2398 13.4364 45.4598 13.4601C45.6702 13.3597 45.5942 13.4341 45.7159 13.2539C47.9739 17.9574 48.6919 25.3442 47.2618 30.3846L47.1986 29.4552L47.1173 29.3985C46.4796 29.3438 45.7228 29.6224 45.1144 29.7274C43.7003 29.9714 42.4998 29.7655 41.167 29.5211C40.7334 29.4416 38.6353 29.8662 38.2554 30.0557C39.9958 25.1787 39.5972 19.1799 36.8732 14.7894Z" fill="url(#paint2_linear_2311_38)"/>
<path d="M12.5112 34.0475L19.6281 34.0503L19.6215 37.6122L23.8965 37.6185C27.499 37.6201 29.3276 37.6433 32.7212 35.9987C31.1881 37.1261 29.6066 38.0735 27.9517 38.9802C27.5096 39.2382 27.018 39.4776 26.561 39.7063C22.0107 41.9832 17.2415 43.7537 12.4932 45.487C12.4526 42.5726 12.5161 39.6413 12.4911 36.7253C12.4834 35.8389 12.4844 34.9316 12.5112 34.0475Z" fill="url(#paint3_linear_2311_38)"/>
<path d="M13.2517 16.6269C14.6317 16.5764 16.2948 16.6257 17.6977 16.6267C15.1139 19.0902 12.4959 21.7737 9.94771 24.3026L16.6955 30.8813L16.4216 31.5585L16.1856 32.0507L13.2392 32.0494L8.25287 27.3272C7.50612 26.6178 6.72403 25.917 6.00391 25.2019C5.53967 24.6777 5.52569 23.9416 6.01975 23.4539C8.38056 21.1236 10.8729 18.9354 13.2517 16.6269Z" fill="#001137"/>
<path d="M29.0448 16.6106C29.1479 16.6765 29.2201 16.7361 29.3115 16.8186C31.4271 18.7295 33.4932 20.7587 35.6157 22.6557C36.1546 23.1374 36.965 23.909 36.4235 24.6661C35.9707 25.2982 35.2506 26.0669 34.7415 26.6615L30.9536 31.1117C30.7543 31.1999 27.8443 31.158 27.4255 31.1579L30.7708 26.9646C31.4972 26.0588 32.2593 25.0739 33.0219 24.2099C31.7858 22.9604 30.3202 21.5841 29.0352 20.3881L29.0448 16.6106Z" fill="#0246D0"/>
<path d="M25.0114 14.9443L27.3932 14.9465C25.1852 20.6657 22.7471 26.359 20.4727 32.0504L18.1022 32.0497C18.8925 30.0681 19.6979 28.0931 20.518 26.1252L25.0114 14.9443Z" fill="#001137"/>
<path d="M8.15455 10.9805L10.8486 10.9814L10.8504 13.8595L8.15173 13.86L8.15455 10.9805Z" fill="#001137"/>
<path d="M8.1822 1.02183L10.8505 1.01935C10.8565 1.98839 10.8502 2.95744 10.8313 3.92626L8.15493 3.92964C8.15605 3.33666 8.10179 1.53283 8.1822 1.02183Z" fill="#001137"/>
<path d="M7.35623 6.479L9.92542 6.47748L9.92441 9.30297L7.34619 9.29925L7.35623 6.479Z" fill="#001137"/>
<path d="M3.85333 2.68833L6.42984 2.68506L6.41539 5.46556L3.84998 5.46691C3.83988 4.54744 3.85109 3.60939 3.85333 2.68833Z" fill="#0246D0"/>
<path d="M0.767944 5.91565L3.16745 5.9209C3.17611 6.7707 3.17117 7.62062 3.15262 8.47031C2.35943 8.45981 1.56608 8.46393 0.772991 8.48268L0.767944 5.91565Z" fill="#005AEF"/>
<path d="M0.0142934 0.00671782L2.36842 0L2.35949 2.57301L0.00722576 2.57505C-0.00435912 1.71897 -0.00202112 0.862733 0.0142934 0.00671782Z" fill="#005AEF"/>
<path d="M4.27552 9.49183C4.86747 9.46592 5.46239 9.4767 6.05502 9.4806C6.06284 10.1404 6.06273 10.8004 6.0547 11.4602C5.46249 11.4557 4.86013 11.4644 4.26707 11.4672C4.25846 10.8088 4.26128 10.1502 4.27552 9.49183Z" fill="#005AEF"/>
<defs>
<linearGradient id="paint0_linear_2311_38" x1="29.4774" y1="16.2754" x2="26.4352" y2="-0.689665" gradientUnits="userSpaceOnUse">
<stop stop-color="#0047DA"/>
<stop offset="1" stop-color="#0070FF"/>
</linearGradient>
<linearGradient id="paint1_linear_2311_38" x1="31.4563" y1="45.5943" x2="30.2485" y2="30.3568" gradientUnits="userSpaceOnUse">
<stop stop-color="#000D2C"/>
<stop offset="1" stop-color="#002978"/>
</linearGradient>
<linearGradient id="paint2_linear_2311_38" x1="43.1508" y1="30.1502" x2="41.9063" y2="13.1947" gradientUnits="userSpaceOnUse">
<stop stop-color="#00297B"/>
<stop offset="1" stop-color="#004ADD"/>
</linearGradient>
<linearGradient id="paint3_linear_2311_38" x1="23.0873" y1="42.2553" x2="16.2432" y2="31.7718" gradientUnits="userSpaceOnUse">
<stop stop-color="#00319A"/>
<stop offset="1" stop-color="#0051EA"/>
</linearGradient>
</defs>
</svg> -->


                <!-- Text Logo -->
                <div class="flex flex-col justify-center">
                  <div class="flex items-center font-display font-extrabold text-[1.4rem] md:text-[1.75rem] tracking-widest leading-none">
                    <span class="text-navy dark:text-white">D</span>
                    <div class="flex flex-col justify-center gap-[4px] mx-0.5 h-[1.4rem]">
                      <div class="w-[0.8rem] md:w-[1rem] h-[3px] md:h-[4px] bg-blue-600 rounded-sm"></div>
                      <div class="w-[0.8rem] md:w-[1rem] h-[3px] md:h-[4px] bg-blue-600 rounded-sm"></div>
                      <div class="w-[0.8rem] md:w-[1rem] h-[3px] md:h-[4px] bg-blue-600 rounded-sm"></div>
                    </div>
                    <span class="text-navy dark:text-white">VELOPER</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2 mt-1.5 w-full px-1">
                <div class="h-px bg-blue-600 flex-1"></div>
                <span class="text-[0.45rem] md:text-[0.55rem] font-bold text-blue-600 tracking-[0.2em] uppercase whitespace-nowrap">
                  Software's and Services
                </span>
                <div class="h-px bg-blue-600 flex-1"></div>
              </div>
            </div>
          </div>

          <!-- Desktop Navigation Menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a *ngFor="let item of navItems" 
               (click)="scrollToSection(item.id)" 
               class="text-sm font-semibold tracking-wide cursor-pointer transition-colors duration-200"
               [ngClass]="{ 
                 'text-primary dark:text-blue-400': activeSection === item.id, 
                 'text-navy/70 dark:text-white/70 hover:text-primary dark:hover:text-white': activeSection !== item.id 
               }">
              {{ item.name }}
            </a>
          </div>

          <!-- Right Side: Dark Mode & CTA -->
          <div class="hidden md:flex items-center space-x-4">
            <!-- Dark Mode Toggle Button -->
            <button (click)="toggleDarkMode()" 
                    class="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-navy dark:text-white transition-all duration-200 shadow-sm"
                    aria-label="Toggle theme">
              <!-- Sun Icon -->
              <svg *ngIf="isDarkMode" class="w-5 h-5 transition-transform hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
              <!-- Moon Icon -->
              <svg *ngIf="!isDarkMode" class="w-5 h-5 transition-transform hover:-rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            <!-- CTA Button -->
            <button (click)="scrollToSection('contact')" 
                    class="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-bold tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5">
              Get Free Consultation
            </button>
          </div>

          <!-- Mobile menu button -->
          <div class="flex items-center space-x-3 md:hidden">
            <!-- Dark Mode Toggle Button for Mobile -->
            <button (click)="toggleDarkMode()" 
                    class="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-navy dark:text-white shadow-sm"
                    aria-label="Toggle theme">
              <svg *ngIf="isDarkMode" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
              <svg *ngIf="!isDarkMode" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            <!-- Hamburger Button -->
            <button (click)="isMenuOpen = !isMenuOpen" 
                    class="inline-flex items-center justify-center p-2 rounded-lg text-navy dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none transition-colors"
                    aria-expanded="false">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path *ngIf="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                <path *ngIf="isMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="md:hidden transition-all duration-300 ease-in-out overflow-hidden" 
           [ngClass]="{ 'max-h-screen opacity-100 glass shadow-lg border-t dark:border-white/5': isMenuOpen, 'max-h-0 opacity-0 pointer-events-none': !isMenuOpen }">
        <div class="px-2 pt-3 pb-6 space-y-1 sm:px-3 flex flex-col items-center">
          <a *ngFor="let item of navItems" 
             (click)="scrollToSection(item.id)" 
             class="w-full text-center px-4 py-3 rounded-md text-base font-semibold tracking-wide cursor-pointer transition-colors"
             [ngClass]="{ 
               'bg-primary/10 text-primary dark:text-blue-400': activeSection === item.id, 
               'text-navy/80 dark:text-white/85 hover:bg-slate-100 dark:hover:bg-slate-800/50': activeSection !== item.id 
             }">
            {{ item.name }}
          </a>
          <div class="pt-4 w-full px-4">
            <button (click)="scrollToSection('contact')" 
                    class="w-full py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-center text-sm font-bold shadow-md shadow-primary/15 transition-all duration-300">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isDarkMode = false;
  isMenuOpen = false;
  activeSection = 'home';

  navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Check system preference or localStorage
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme === 'dark') {
        this.isDarkMode = true;
        document.documentElement.classList.add('dark');
      } else {
        this.isDarkMode = false;
        document.documentElement.classList.remove('dark');
      }
      this.checkScroll();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScroll();
      this.determineActiveSection();
    }
  }

  checkScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  scrollToSection(sectionId: string): void {
    this.isMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      // Small offset for fixed navbar
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      this.activeSection = sectionId;
    }
  }

  determineActiveSection(): void {
    const scrollPosition = window.scrollY + 120; // threshold
    for (const item of this.navItems) {
      const element = document.getElementById(item.id);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection = item.id;
        }
      }
    }
  }
}
