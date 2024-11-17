import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faMoon } from '@fortawesome/free-solid-svg-icons'; 
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faGithub,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { ThemeService } from './theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

openExternalWebsiteYouTube() {
  window.open('https://www.youtube.com/@rahulvodala6944/videos','_blank');
}
openExternalWebsiteGitHub() {
  window.open('https://github.com/rahul-real', '_blank');
}
openExternalWebsiteLocation() {
  window.open('https://www.google.com/maps/place/UNITED+AGENCIES/@18.6763113,78.0926506,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcddb3b35799573:0x2e51dfa6dbb0ec80!8m2!3d18.6763113!4d78.0952255!16s%2Fg%2F11bzzyjnxf?entry=ttu', '_blank');
}
  faLocationDot = faLocationDot;
  faSun = faSun;
  faMoon = faMoon;
  faGithub = faGithub;
  faYoutube = faYoutube;
  isDarkMode: any;

  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleDarkMode();
    this.isDarkMode = this.themeService.darkMode;
  }


}
