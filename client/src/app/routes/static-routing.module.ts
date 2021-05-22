import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseRoutes } from './base-routes';

@NgModule({
  imports: [
    RouterModule.forRoot(BaseRoutes, {
      enableTracing: true,
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
