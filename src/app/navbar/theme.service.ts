// theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public darkMode = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.updateTheme();
  }

  private updateTheme() {
    document.body.classList.toggle('dark-theme', this.darkMode);
    // You may also store the theme preference in localStorage or a cookie.
  }
}
