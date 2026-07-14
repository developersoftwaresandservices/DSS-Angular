import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  public setSEOData(): void {
    const title = "Developer Software's and Services | Website Development, SEO, Google Business Profile & Meta Ads";
    const description = "Developer Software's and Services offers professional website development, SEO, Google Business Profile optimization, Meta Ads management, hosting, and maintenance services to help businesses grow online.";
    const keywords = "Website Development, Web Design, Static Website, Dynamic Website, SEO Services, Google Business Profile, Meta Ads, Facebook Ads, Instagram Ads, Website Hosting, Website Maintenance, Software Company, Digital Marketing, Responsive Website, Business Website, E-commerce Website";

    this.titleService.setTitle(title);
    
    // Set standard meta tags
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
    this.metaService.updateTag({ name: 'author', content: "Developer Software's and Services" });
    
    // Open Graph / Facebook Meta Tags
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://developersoftwaresandservices.com/' }); // Placeholder domain
    
    // Inject Schema.org JSON-LD
    this.injectSchema();
  }

  private injectSchema(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Clean up existing schema script if any
      const existingSchema = document.getElementById('company-schema');
      if (existingSchema) {
        existingSchema.remove();
      }

      const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Developer Software's and Services",
        "image": "https://developersoftwaresandservices.com/assets/logo.png", // placeholder
        "@id": "https://developersoftwaresandservices.com/#organization",
        "url": "https://developersoftwaresandservices.com/",
        "telephone": "+916382591208",
        "email": "developersoftwaresandservices@gmail.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "",
          "addressLocality": "Tamil Nadu",
          "addressRegion": "TN",
          "postalCode": "",
          "addressCountry": "IN"
        },
        "description": "Professional web development, SEO, Google Business Profile optimization, Meta Ads management, hosting, and maintenance services.",
        "slogan": "We Build • We Promote • We Grow",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+916382591208",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "ta"]
        },
        "sameAs": [
          "https://www.facebook.com/people/Developer-Softwares-and-Services/61592001740745/",
          "https://www.instagram.com/developer_softwares_services",
          "https://www.linkedin.com/in/developer-software-s-and-services-3084aa422"
        ]
      };

      const script = document.createElement('script');
      script.id = 'company-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }
}
