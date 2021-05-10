import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseRoutes } from './base-routes';

@NgModule({
  imports: [RouterModule.forRoot(BaseRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
