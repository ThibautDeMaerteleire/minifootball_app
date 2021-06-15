import { Routes } from '@angular/router';
import { baseRoutesEnum, lineUpRoutesEnum, } from 'src/app/constants/routes.enum';
import { LineUpsCreateComponent } from 'src/app/pages/app/team/line-ups/line-ups-create/line-ups-create.component';
import { LineUpsDetailComponent } from 'src/app/pages/app/team/line-ups/line-ups-detail/line-ups-detail.component';
import { LineUpsOverviewComponent } from 'src/app/pages/app/team/line-ups/line-ups-overview/line-ups-overview.component';

export const LineUpRoutes: Routes = [{
  path: lineUpRoutesEnum.overview,
  component: LineUpsOverviewComponent
}, {
  path: lineUpRoutesEnum.detail,
  component: LineUpsDetailComponent
}, {
  path: lineUpRoutesEnum.create,
  component: LineUpsCreateComponent
}, {
  path: baseRoutesEnum.all_routes,
  redirectTo: lineUpRoutesEnum.overview
}];
