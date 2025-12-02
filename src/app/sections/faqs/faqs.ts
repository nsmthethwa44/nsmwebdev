import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faqs',
  imports: [CommonModule],
  templateUrl: './faqs.html',
  styleUrl: './faqs.scss'
})
export class Faqs {
 faqs = [
    { question: 'How do you structure your .NET projects?', answer: 'I use a layered, SOLID-principled structure: Entities → Interfaces → Repositories → Services → Controllers.', open: false },
    { question: 'How do you secure your applications?', answer: 'JWT authentication, role-based authorization, and clean token handling on both backend and Angular interceptors.', open: false },
    { question: 'How do you handle state and data flow in Angular?', answer: 'Services, Observables, and clean separation between UI components and business logic.', open: false }
  ];

  toggleFaq(faq: any) {
    faq.open = !faq.open;
  }

    @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    document.documentElement.style.setProperty('--mouseX', `${e.clientX - window.innerWidth/2}px`);
    document.documentElement.style.setProperty('--mouseY', `${e.clientY - window.innerHeight/2}px`);
  }
}
