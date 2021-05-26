import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseRoutes } from './base-routes';

@NgModule({
  imports: [
    RouterModule.forRoot(BaseRoutes, {
      enableTracing: false,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
