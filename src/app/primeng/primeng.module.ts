import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';

export const PrimeNgComponents: any = [ButtonModule, GalleriaModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimeNgComponents],
  exports: [PrimeNgComponents],
})
export class PrimeNgModule {}
