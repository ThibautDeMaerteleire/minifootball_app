import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent {

  @Input() class = '';
  @Input() rows = 1;
  @Input() rowHeight = '3rem';

}
