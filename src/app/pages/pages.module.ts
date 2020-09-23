import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './general/header-container/header-container.component';
import { FooterContainerComponent } from './general/footer-container/footer-container.component';
import { NzButtonModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [HeaderContainerComponent, FooterContainerComponent],
  imports: [CommonModule, NzButtonModule],
  exports: [HeaderContainerComponent, FooterContainerComponent],
})
export class PagesModule {}
