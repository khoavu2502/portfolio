import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { FooterComponent } from "./components/footer/footer.component";
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LandingPageComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  showNavBar = true;
  private lastScrollTop = 0;
  title = 'portfolio';

  ngOnInit(): void {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      disable: window.innerWidth < 1024
    });
    setTimeout(() => AOS.refresh(), 0);
  }
}
