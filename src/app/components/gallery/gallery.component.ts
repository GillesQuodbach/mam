import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../photo.service';
import { PrimeNgComponents } from '../../primeng/primeng.module';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [PrimeNgComponents, GalleriaModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit {
  images: any[] | undefined;

  responsiveOptions: any[] = [
    {
      breakpoint: '1300px',
      numVisible: 4,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getImages().subscribe(
      (images) => {
        this.images = images;
        console.log(images);
      },
      (error) => {
        console.log('Erreur lors du chargement des images:', error);
      }
    );
  }
}
