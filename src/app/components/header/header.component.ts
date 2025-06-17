import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  handleMenu() {
    const isMobile = window.innerWidth <= 1024;

    if (isMobile) {
      setTimeout(() => {
      // toggle menu's display
      this.isMenuOpen = !this.isMenuOpen;
      }, 100);
    }
  }
}
