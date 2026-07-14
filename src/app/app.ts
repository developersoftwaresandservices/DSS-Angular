import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar';
import { HeroComponent } from './components/hero';
import { AboutComponent } from './components/about';
import { ServicesComponent } from './components/services';
import { WhyChooseUsComponent } from './components/why-choose-us';
import { ProcessComponent } from './components/process';
import { PortfolioComponent } from './components/portfolio';
import { TestimonialsComponent } from './components/testimonials';
import { PricingComponent } from './components/pricing';
import { FaqComponent } from './components/faq';
import { ContactComponent } from './components/contact';
import { FooterComponent } from './components/footer';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    WhyChooseUsComponent,
    ProcessComponent,
    PortfolioComponent,
    TestimonialsComponent,
    PricingComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setSEOData();
  }
}

