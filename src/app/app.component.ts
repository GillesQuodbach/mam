import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNgComponents } from './primeng/primeng.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeNgComponents],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mam';
}
