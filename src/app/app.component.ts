import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNgComponents } from './primeng/primeng.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeNgComponents, HeaderComponent, HomeComponent, AproposComponent, GalleryComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mam';
}
