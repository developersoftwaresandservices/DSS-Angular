import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  private selectedService$ = new BehaviorSubject<string>('');

  getSelectedService(): Observable<string> {
    return this.selectedService$.asObservable();
  }

  setSelectedService(service: string): void {
    this.selectedService$.next(service);
  }
}
