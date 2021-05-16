import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { BaseRoutes } from './base-routes';

@NgModule({
  imports: [
    RouterModule.forRoot(BaseRoutes, {
      scrollPositionRestoration: 'top',
    }),
    ComponentsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
