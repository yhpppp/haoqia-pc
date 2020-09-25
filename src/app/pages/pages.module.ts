import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './general/header-container/header-container.component';
import { FooterContainerComponent } from './general/footer-container/footer-container.component';
import { NzButtonModule, NzCarouselModule } from 'ng-zorro-antd';
import { CarouselComponent } from './general/carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { SwitchArrowComponent } from './general/switch-arrow/switch-arrow.component';

@NgModule({
  declarations: [
    HeaderContainerComponent,
    FooterContainerComponent,
    HomeComponent,
    CarouselComponent,
    SwitchArrowComponent,
  ],
  imports: [CommonModule, NzButtonModule, NzCarouselModule],
  exports: [
    HeaderContainerComponent,
    FooterContainerComponent,
    HomeComponent,
    CarouselComponent,
  ],
})
export class PagesModule {}
