import { Component } from '@angular/core';
import { PrimeNgModule } from '../../primeng/primeng.module';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    const offset = 80;
    if (section) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionPosition - offset,
        behavior: 'smooth',
      });
    }
  }
}
