import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListItemComponent } from './pages/list-item/list-item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-item', component: ListItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
