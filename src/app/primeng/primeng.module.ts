import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

export const PrimeNgComponents: any = [ButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimeNgComponents],
  exports: [PrimeNgComponents],
})
export class PrimeNgModule {}
