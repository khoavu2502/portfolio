import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  email = "khoavu2502@gmail.com";

  activeTab = 'helpdeskbox';

  tabs = [
    { id: 'helpdeskbox', label: 'Helpdesk Box' },
    { id: 'hopee', label: 'Hopee' },
    { id: 'hcmut', label: 'HCMUT' }
  ];
}
